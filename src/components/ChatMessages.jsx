import { ChatMessage } from './ChatMessage';
import { useAutoScroll } from '../hooks/useAutoScroll';
import './ChatMessages.css';

//Component: rendering the data to HTML
function ChatMessages({ chatMessages }) {
  const chatMessagesRef = useAutoScroll([chatMessages]);

  return (
    <div className="chat-messages-container" ref={chatMessagesRef}>

      {chatMessages.length === 0
        ? <div className="welcome-message">Welcome to Yurucamp Chatbot! Send a message using the textbox below.</div>
        : chatMessages.map((chatMessage) => {
          return (
            <ChatMessage
              message={chatMessage.message}
              sender={chatMessage.sender}
              key={chatMessage.id}
            />
          )
        })}
    </div>
  );
};

export default ChatMessages;