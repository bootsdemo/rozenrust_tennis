import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Loader2, Phone, User } from 'lucide-react';
import { sendMessageToGeminiStream } from '../services/geminiService';
import { ChatMessage } from '../types';

const ClubAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Name Gating State
  const [userName, setUserName] = useState('');
  const [isNameSet, setIsNameSet] = useState(false);

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Welkom at Rozenrust. How can I assist you today?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // REPLACE THIS WITH THE REAL CLUB NUMBER
  const WHATSAPP_NUMBER = '18654413880'; 

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isNameSet) {
      scrollToBottom();
    }
  }, [messages, isNameSet]);

  // Lock body scroll when chat is open on mobile
  useEffect(() => {
    if (isOpen && window.innerWidth < 768) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleNameSubmit = () => {
    if (!userName.trim()) return;
    setIsNameSet(true);
    setMessages([
      { role: 'model', text: `Welcome ${userName} at Rozenrust. How can I assist you today?` }
    ]);
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input;
    setInput('');
    
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    const history = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    setMessages(prev => [...prev, { role: 'model', text: '' }]);

    try {
      let fullResponse = '';
      const stream = sendMessageToGeminiStream(userMessage, history);
      
      for await (const chunk of stream) {
        fullResponse += chunk;
        setMessages(prev => {
          const newMessages = [...prev];
          const lastMsg = newMessages[newMessages.length - 1];
          if (lastMsg.role === 'model') {
            lastMsg.text = fullResponse;
          }
          return newMessages;
        });
      }
    } catch (error) {
      console.error("Chat error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const openWhatsApp = () => {
    const text = encodeURIComponent(`Hello Rozenrust, my name is ${userName}. I have a question about the club.`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  return (
    <>
      {/* Floating Action Button - Hidden when chat is open on mobile to prevent overlap */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 ${
          isOpen ? 'bg-tennis-clay text-white rotate-90 hidden md:block' : 'bg-tennis-green text-white'
        }`}
        aria-label="Open AI Assistant"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-[60] bg-white flex flex-col md:inset-auto md:bottom-24 md:right-6 md:w-96 md:h-auto md:max-h-[600px] md:rounded-2xl md:shadow-2xl md:border md:border-stone-200 animate-fade-in-up md:origin-bottom-right"
        >
          {/* Header */}
          <div className="bg-tennis-green p-4 text-white flex justify-between items-center flex-shrink-0 shadow-sm">
            <div>
              <h3 className="font-serif font-semibold text-lg">Rozenrust Concierge</h3>
              <p className="text-xs text-green-200">AI Powered Assistant</p>
            </div>
            
            <div className="flex items-center space-x-3">
              {isNameSet && (
                <button 
                  onClick={openWhatsApp}
                  className="flex items-center space-x-1 bg-green-600 hover:bg-green-500 text-white text-xs px-3 py-1.5 rounded-full transition-colors border border-green-500 shadow-sm"
                >
                  <Phone size={12} fill="currentColor" />
                  <span>WhatsApp</span>
                </button>
              )}
              
              {/* Close Button - Always visible on mobile in header */}
              <button 
                onClick={() => setIsOpen(false)} 
                className="p-1 text-white/80 hover:text-white transition-colors"
                aria-label="Close Chat"
              >
                <X size={24} />
              </button>
            </div>
          </div>

          {!isNameSet ? (
            /* Name Entry View */
            <div className="flex-1 flex flex-col items-center justify-center p-8 bg-stone-50 text-center overflow-y-auto">
              <div className="bg-white p-4 rounded-full mb-4 shadow-sm text-tennis-clay">
                <User size={32} />
              </div>
              <h4 className="font-serif text-xl font-semibold text-stone-800 mb-2">Welcome</h4>
              <p className="text-sm text-stone-500 mb-6 leading-relaxed">
                Please enter your name so we can better assist you.
              </p>
              
              <div className="w-full space-y-3 max-w-xs">
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleNameSubmit()}
                  placeholder="Your Name"
                  // Explicitly use text-[16px] to prevent iOS zoom
                  className="w-full px-4 py-3 bg-white rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-tennis-green text-[16px] text-stone-800 placeholder:text-stone-400 shadow-sm"
                  autoFocus
                />
                <button
                  onClick={handleNameSubmit}
                  disabled={!userName.trim()}
                  className="w-full py-3 bg-tennis-green text-white rounded-xl font-medium hover:bg-green-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  <span>Start Chatting</span>
                </button>
              </div>
            </div>
          ) : (
            /* Chat Interface View */
            <>
              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto p-4 bg-stone-50 space-y-4">
                {messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                        msg.role === 'user'
                          ? 'bg-tennis-clay text-white rounded-br-none'
                          : 'bg-white border border-stone-200 text-stone-700 rounded-bl-none shadow-sm'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
                {isLoading && messages[messages.length - 1]?.role !== 'model' && (
                  <div className="flex justify-start">
                    <div className="bg-white border border-stone-200 p-3 rounded-2xl rounded-bl-none shadow-sm flex items-center space-x-2">
                      <Loader2 size={16} className="animate-spin text-tennis-green" />
                      <span className="text-xs text-stone-400">Thinking...</span>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="p-3 md:p-4 bg-white border-t border-stone-100 flex-shrink-0 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Ask about courts..."
                    // text-[16px] on mobile prevents auto-zoom, text-sm on desktop matches design
                    className="flex-1 bg-stone-100 text-stone-800 text-[16px] md:text-sm px-4 py-3 rounded-full focus:outline-none focus:ring-1 focus:ring-tennis-green transition-all"
                  />
                  <button
                    onClick={handleSend}
                    disabled={isLoading || !input.trim()}
                    className="p-3 bg-tennis-green text-white rounded-full hover:bg-green-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <Send size={18} />
                  </button>
                </div>
                <div className="text-center mt-2">
                    <p className="text-[10px] text-stone-400">
                      Prefer a human? Click the WhatsApp button above.
                    </p>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default ClubAssistant;