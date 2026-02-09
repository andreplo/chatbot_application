# chatbot_application

This is a Chatbot Application for demo purposes. This is a containerized application using React and Typescript for the user facing application and Python FastAPI for the backend application.

The whole application is located in this monorepo.

# Backend

I used the 'transformers' Python module to load a model for my chatbot. Specifically, I used the 'microsoft/DialoGPT-small' which cannot respond very accurately. This was a limitation of my machine which is old and does not have too much compute power. I also tried the 'microsoft/DialoGPT-medium' which could respond more in context for example it would greet me back, tell me it's doing fine and ask me how I'm doing. But, my requests would take too much to get resolved. Due to the aforementioned system limitations -my laptop does not have a compatible to PyTorch gpu- I couldn't experiment more and move the model() and the tensors to the gpu to speed things up.

My API was build with FastAPI with which I exposed the endpoints that my frontend communicates with my model.

------------- CAUTION --------------------------------------------------------------------------------
_Even if you can visit the frontend page, messages will fail until you see the following lines on your terminal_

<!-- backend | INFO: Started server process [1]
backend | INFO: Waiting for application startup.
backend | INFO: Application startup complete.
backend | INFO: Uvicorn running on http://0.0.0.0:8000 (Press CTRL+C to quit) -->

GPT2LMHeadModel LOAD REPORT from: microsoft/DialoGPT-medium
Key | Status | |
---------------------------------+------------+--+-
transformer.h.{0...23}.attn.bias | UNEXPECTED | |

Notes:

- UNEXPECTED :can be ignored when loading from different task/architecture; not ok if you expect identical arch.
  INFO Started server process [15340]
  INFO Waiting for application startup.
  INFO Application startup complete.

_Due to gpt-model loading slowly, even though the backend container seems to be running the backend application is still initializing for some time (2-3mins)_

---

# Frontend

The Frontend application was made with React,Typescript + Vite. The Chat window is Responsive and I have made it resizable for testing. You can grab the bottom right corner and resize it for experimentation. For the Components' styling I used TailwindCSS. I have also made two modes (Night/Light Modes). For the backend calls I used _axios_ as a client and in addition i used _TanstackQuery_ to leverage the out-of-the-box isPending,isSuccess,isError signals it provides for better error and loading handling.

"Send and fail" checkbox:
If you check it and then send a message you can see what would be displayed on the conversation if an error status was returned after a message was sent.

# Containerization

I used Docker Compose (docker-compose.yml ---> located at the root folder of the project). This "docker-compose.yml" uses two Dockerfiles, "/backend/Dockerfile" and "/frontend/Dockerfile" which are responsible for the creation of the backend and frontend images respectively.

**So in order to run the whole application with one button - Docker Compose**

Inside the root folder:

1] Open a terminal on the root level of this repo "/../../chatbot_application" and checkout "develop" branch
2] Make sure that you have Docker Desktop installed and running on your machine.
3] while being on the root folder run the command \_docker compose up --build\*. -It might take a while due to certain python libraries' size which are downloaded during container initialization - - The above command starts a network with two containers, one for our frontend application and one for our backend one -

4] If everything's working the applications run on ports:

      - Frontend: http://localhost:8080
      - Backend: http://localhost:8000

!!! If above steps don't work another way to run it is by running the containers seperately !!!

1] >> pwd -----> /../..some path../chatbot_aplication
2] >> cd frontend
3] >> docker build -t my_frontend . -----> Creates the frontend image
4] >> docker run -p 8080:5173 my_frontend -----> Runs frontend container
5] >> cd .. -----> Go to root folder
6] >> cd backend
7] >> docker build -t my_backend . -----> Creates the backend image
8] >> docker run -p 8000:8000 my_backend -----> Runs backend container
9] Now the containers are listening to ports:
Frontend: http://localhost:8080
Backend: http://localhost:8000
