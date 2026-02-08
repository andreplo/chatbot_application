import { useState } from 'react';
import Conversation from './Conversation';
import type { MessageProps as MessageType } from './Message';

const messages: MessageType[] = [
  { id: '1', text: 'Hello!', sender: 'user' },
  { id: '2', text: 'Hi there! How can I assist you today?', sender: 'bot' },
  { id: '3', text: 'Can you tell me a joke?', sender: 'user' },
  {
    id: '4',
    text: "Sure! Why don't scientists trust atoms? Because they make up everything!",
    sender: 'bot',
  },
  { id: '5', text: 'Haha, that was a good one!', sender: 'user' },
  {
    id: '6',
    text: 'Glad you liked it! If you have any more questions or need assistance, feel free to ask.',
    sender: 'bot',
  },
  { id: '7', text: 'Thanks! Will do.', sender: 'user' },
];

export default function ChatWindow() {
  //   const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState<string>('');

  const handleClick = () => {
    console.log(inputValue);
    // if (!inputRef.current) return;
    // console.log(inputRef.current.value);
    // alert(`Input value: ${inputRef.current.value}`);
  };
  return (
    <div className="bg-blue-300 dark:bg-blue-300 h-[70vh] w-[60vw] rounded-lg px-4 flex flex-col gap-2 text-center justify-between">
      <h3 className="dark:text-gray-900">Chat Window</h3>
      <Conversation messages={messages} />
      <div className="flex flex-row gap-2">
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type message...."
          className="my-2 p-2 border-2 border-gray-300 rounded-lg w-[80%] focus:outline-none focus:border-4"
        />
        <button
          onClick={handleClick}
          disabled={!inputValue}
          className="bg-blue-500 text-white font-semibold my-2 p-2 rounded-lg hover:bg-blue-600 hover:cursor-pointer transition-colors duration-300 flex-1 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          Send
        </button>
      </div>
    </div>
  );
}
