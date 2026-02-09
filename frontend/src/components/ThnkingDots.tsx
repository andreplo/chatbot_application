import { useEffect, useState } from 'react';

export default function ThinkingDots() {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => (prev.length === 3 ? '' : prev + '.'));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <p className="font-semibold">Thinking{dots}</p>;
}