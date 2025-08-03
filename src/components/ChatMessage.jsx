import RobotProfileImage from '../assets/NadebotReversed.png'; //default export (explain later)
import UserProfileImage from '../assets/user.png'; // when import image, Vite assign the filepath of that image to the variable we defined
import './ChatMessage.css';
import React from 'react';

function renderMultilineMessage(message) {
  if (typeof message !== 'string') return message;
  return message.split('\n').map((line, idx, arr) => (
    <React.Fragment key={idx}>
      {line}
      {idx < arr.length - 1 && <br />}
    </React.Fragment>
  ));
}

// Component: represend one single message
export function ChatMessage({ message, sender }) {

  return (
    // assign class based on sender
    <div className={sender === 'robot' ? 'chat-message-robot' : 'chat-message-user'}>
      {sender === 'robot' && (
        <img src={RobotProfileImage} className="chat-message-profile" />
      )}
      <div className="chat-message-content">
        {renderMultilineMessage(message)}
      </div>
      {sender === 'user' && (
        <img src={UserProfileImage} className="chat-message-profile" />
      )}
    </div>
  )
};