import { useEffect, useRef } from 'react';
import Message from './Message';
import type { MessageProps as MessageType } from './Message';

export type ConversationProps = {
  messages: MessageType[];
};

export default function Conversation(props: ConversationProps) {
  const { messages } = props;
  const bottomRef = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <ul className="h-[70%] overflow-y-auto p-2 border-2 border-gray-300 rounded-lg">
      {messages.map((message) => (
        <Message key={message.id} {...message} />
      ))}
      <li ref={bottomRef}></li>
    </ul>
  );
}
