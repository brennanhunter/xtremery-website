'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSend, FiMessageCircle, FiX } from 'react-icons/fi';

type Message = { sender: 'user' | 'bot'; text: string };

export default function Chatbot() {
  const [message, setMessage] = useState('');
  const [chatOpen, setChatOpen] = useState(false);
  const [history, setHistory] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const STORAGE_KEY = 'xtremery-chat-history';

  useEffect(() => {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    if (stored) setHistory(JSON.parse(stored));
  }, []);

  useEffect(() => {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(history));
  }, [history]);

  const sendMessage = async () => {
    if (!message.trim()) return;
    const userMsg: Message = { sender: 'user', text: message };
    setHistory((prev) => [...prev, userMsg]);
    setMessage('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }),
      });

      const data = await res.json();
      const botReply: Message = {
        sender: 'bot',
        text: data.response || 'No response from Gemini.',
      };

      setHistory((prev) => [...prev, botReply]);
    } catch {
      setHistory((prev) => [
        ...prev,
        { sender: 'bot', text: 'Error: Could not connect.' },
      ]);
    }

    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!chatOpen && (
        <button
          onClick={() => setChatOpen(true)}
          className="p-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-full shadow-lg hover:scale-105 transition"
        >
          <FiMessageCircle className="w-6 h-6" />
        </button>
      )}

      <AnimatePresence>
        {chatOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ duration: 0.3 }}
            className="w-[320px] sm:w-[360px] bg-gray-900 text-white rounded-xl shadow-2xl overflow-hidden flex flex-col"
          >
            <div className="flex justify-between items-center bg-gradient-to-r from-purple-700 to-blue-700 px-4 py-3">
              <h3 className="text-lg font-bold">Xtremery Assistant</h3>
              <button onClick={() => setChatOpen(false)}>
                <FiX className="w-5 h-5 text-white" />
              </button>
            </div>

            <div className="flex-1 px-4 py-2 space-y-3 overflow-y-auto max-h-96 bg-black/60">
              {history.map((msg, i) => (
                <div
                  key={i}
                  className={`text-sm p-3 max-w-[80%] rounded-xl ${
                    msg.sender === 'user'
                      ? 'ml-auto bg-cyan-600 text-white'
                      : 'bg-purple-700 text-white'
                  }`}
                >
                  {msg.text}
                </div>
              ))}
              {isLoading && (
                <div className="bg-purple-700 text-white text-sm p-3 rounded-xl w-fit animate-pulse">
                  Typing...
                </div>
              )}
            </div>

            <div className="flex items-center gap-2 p-3 bg-gray-800">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="Ask me anything..."
                className="flex-1 bg-gray-900 text-white px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <button
                onClick={sendMessage}
                className="p-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full hover:scale-105 transition"
              >
                <FiSend className="w-5 h-5 text-white" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
