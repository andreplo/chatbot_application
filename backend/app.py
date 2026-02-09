from fastapi import FastAPI
from transformers import AutoModelForCausalLM, AutoTokenizer
# from transformers import pipeline
import torch

device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
print("Using device:", device)


if device.type == "cpu":
    torch.set_num_threads(1)
    torch.set_num_interop_threads(1)


model_name = "microsoft/DialoGPT-medium"

tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForCausalLM.from_pretrained(model_name)
# model.to(device) of course we could do the calculations on a gpu to speed thing up but i don't have one available on this machine.
model.eval()

app = FastAPI(debug=True)

from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],       
    allow_credentials=True,
    allow_methods=["*"],         
    allow_headers=["*"],         
)

from pydantic import BaseModel

class UserMessage(BaseModel):
    role: str = 'user'
    message: str
    # history: str[] 

chat_history_ids = None

@app.get("/chatbot-reset")
async def chatbot_reset():
    global chat_history_ids
    chat_history_ids = None
    return {"status": "Chat history reset."}

@app.post("/chatbot")
async def chatbot(req: UserMessage):
    global chat_history_ids

    prompt = f"{req.message}" + tokenizer.eos_token

    new_input_ids = tokenizer.encode(
        prompt,
        return_tensors="pt"
    )

    MAX_HISTORY_TOKENS = 256

    if chat_history_ids is not None:
        bot_input_ids = torch.cat([chat_history_ids, new_input_ids], dim=-1)
        bot_input_ids = bot_input_ids[:, -MAX_HISTORY_TOKENS:]
    else:
        bot_input_ids = new_input_ids

    # with torch.inference_mode():
    #     chat_history_ids = model.generate(bot_input_ids, attention_mask=attention_mask, max_length=60, pad_token_id=tokenizer.eos_token_id)
    with torch.inference_mode():
        chat_history_ids = model.generate(
            bot_input_ids,
            max_new_tokens=40,
            pad_token_id=tokenizer.eos_token_id,
            eos_token_id=tokenizer.eos_token_id,
            do_sample=False,
            use_cache=True
        )

    response_ids = chat_history_ids[:, bot_input_ids.shape[-1]:]
    response = tokenizer.decode(
        response_ids[0],
        skip_special_tokens=True
    )

    return {"message": response}
