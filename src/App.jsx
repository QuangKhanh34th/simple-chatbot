import { useState } from 'react' //look inside node_modules and find the react package there, since we have import the useState from react
import { ChatInput } from './components/ChatInput'; //when import JSX, if we use VIte as build tool, we don't have to add .jsx or .js add the end
import ChatMessages from './components/ChatMessages'; // for default export, we don't have to type the curly brackets anymore
import './App.css'; // import the style for the App (Vite feature: let us import any type of files)


function App() {
  const [chatMessages, setChatMessages] = useState([]); //we no longer need to do "useState"


  return (
    <div className="app-container">
      <ChatMessages
        chatMessages={chatMessages}
      />

      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  )
};

export default App
