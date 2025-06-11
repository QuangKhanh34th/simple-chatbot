import RobotProfileImage from '../assets/robot.png'; //default export (explain later)
import UserProfileImage from '../assets/user.png'; // when import image, Vite assign the filepath of that image to the variable we defined
import './ChatMessage.css';

// Component: represend one single message
export function ChatMessage({ message, sender }) {

  return (
    // assign class based on sender
    <div className={sender === 'robot' ? 'chat-message-robot' : 'chat-message-user'}>
      {sender === 'robot' && (
        <img src={RobotProfileImage} className="chat-message-profile" />
      )}
      <div className="chat-message-content">
        {message}
      </div>
      {sender === 'user' && (
        <img src={UserProfileImage} className="chat-message-profile" />
      )}
    </div>
  )
};