import ThinkingDots from './ThnkingDots';

export type MessageProps = {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  // timestamp: number;
  type?: 'sent' | 'received' | 'pending';
};

export default function Message(props: MessageProps) {
  const { id, text, sender, type } = props;

  if (type === 'pending') {
    return (
      <li
        key={id}
        className={
          'flex flex-col gap-2 mr-auto text-left rounded-bl-none bg-amber-200 text-amber-900 border-amber-300 p-2 rounded-lg mb-4 max-w-[40%] w-fit dark:bg-pink-200'
        }
      >
        <ThinkingDots />
      </li>
    );
  }

  return (
    <li
      key={id}
      className={`${sender === 'user' ? 'flex flex-col gap-2 ml-auto text-left rounded-br-none bg-blue-900 text-white border-blue-900 dark:bg-transparent dark:border-white dark:border' : 'flex flex-col gap-2 mr-auto text-left rounded-bl-none bg-amber-200 text-amber-900 border-amber-300'} p-2 rounded-lg mb-4 max-w-[40%] w-fit dark:bg-pink-200`}
    >
      <p className="font-semibold">{sender === 'user' ? `You: ` : `DialoGPT: `}</p>
      <p className="wrap-break-word whitespace-normal">{text}</p>
    </li>
  );
}
