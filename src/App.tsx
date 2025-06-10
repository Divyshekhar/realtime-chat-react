import { useEffect, useState } from 'react';
import { connect, sendMsg } from './api';
import Header from './components/Header/Header';
import ChatHistory from './components/ChatHistory/ChatHistory';
import ChatInput from './components/ChatInput/ChatInput';

type ChatMessage = {
  type: number;
  body: string;
};

function App() {
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);

  useEffect(() => {
    connect((msg:ChatMessage) => {
      console.log("New message", msg);
      setChatHistory(prev => [...prev, msg]);
    });
  }, []);

  const send = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      const input = event.target as HTMLInputElement
      sendMsg(input.value);
      input.value = "";
    }
  };

  return (
    <>
      <Header />
      <ChatHistory chatHistory={chatHistory} />
      <ChatInput send={send} />
    </>
  );
}

export default App;
