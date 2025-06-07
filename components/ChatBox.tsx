'use client';

import { useState } from 'react';

export default function ChatBox() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  async function sendMessage() {
    if (!input.trim()) return;
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: input }),
    });
    const data = await res.json();
    setResponse(data.reply);
    setInput('');
  }

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Type your message..."
        className="border p-2"
      />
      <button onClick={sendMessage} className="ml-2 bg-green-600 text-white px-3 py-2 rounded">
        Send
      </button>
      <p className="mt-3 font-semibold">AI: {response}</p>
    </div>
  );
}
