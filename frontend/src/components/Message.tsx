export type MessageProps = {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  // timestamp: number;
};

export default function Message(props: MessageProps) {
  const { id, text, sender } = props;
  return (
    <li
      key={id}
      className={`${sender === 'user' ? 'ml-auto text-right rounded-br-none' : 'mr-auto text-left rounded-bl-none'} p-2 rounded-lg mb-4 font-semibold bg-amber-300 max-w-[40%] w-fit`}
    >
      {text}
    </li>
  );
}
