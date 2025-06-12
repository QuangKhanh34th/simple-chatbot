import { useState } from 'react';
import Chatbot from '../chatbot';
import loadingSpinner from '../assets/loading-spinner.gif';
import './ChatInput.css';

// Component: Updating the data
export function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function saveInputText(event) {
    setInputText(event.target.value); // give us the element that we're typing in, then give us the value of that element
  };

  // Control shortcuts like Enter key for send message, Esc for remove the input
  function controlActionShortcuts(event) {
    if (event.key === 'Enter') {
      sendMessage();
    } else if (event.key === 'Escape') {
      setInputText('');
    }
  };

  // async function (explained later)
  async function sendMessage() {
    if (!inputText.trim()) return; // Prevent sending empty message

    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: 'user',
        id: crypto.randomUUID()
      }
    ];

    setChatMessages(newChatMessages);

    // flush old input first before waiting for a promise
    setInputText('');

    // Remove the initial loading spinner for multi-response
    // Only show the spinner for single responses

    // When is Loading is true, disable the input
    setIsLoading(true);

    const response = await Chatbot.getResponseAsync(inputText);
    if (Array.isArray(response)) {
      // For multiple responses, do NOT show the initial spinner
      for (let i = 0; i < response.length; i++) {
        setChatMessages(prev => [
          ...prev,
          {
            message: <img src={loadingSpinner} className="loading-spinner" />,
            sender: 'robot',
            id: crypto.randomUUID()
          }
        ]);
        await Chatbot.getResponseAsyncCustomDelay(inputText, 1750);
        setChatMessages(prev => [
          ...prev.slice(0, -1),
          {
            message: response[i],
            sender: 'robot',
            id: crypto.randomUUID()
          }
        ]);
      }
    } else {
      // For single response, show the spinner before the message
      setChatMessages([
        ...newChatMessages,
        {
          message: <img src={loadingSpinner} className="loading-spinner" />,
          sender: 'robot',
          id: crypto.randomUUID()
        }
      ]);
      await Chatbot.getResponseAsyncCustomDelay(inputText, 1750);
      setChatMessages([
        ...newChatMessages,
        {
          message: response,
          sender: 'robot',
          id: crypto.randomUUID()
        }
      ]);
    }

    // Set isLoading back to false, enable the input again
    setIsLoading(false);

  };

  return (
    <div className="chat-input-container">
      <input
        className="chat-input"
        placeholder="Send a message to Nadeshiko"
        size="30"
        onChange={saveInputText}
        onKeyDown={controlActionShortcuts}
        value={inputText}
        readOnly={isLoading}
      />
      <button
        onClick={sendMessage}
        className="send-button"
      >Send</button>
    </div>
  );
};