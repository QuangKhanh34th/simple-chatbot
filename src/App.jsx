import { useState, useEffect } from 'react'; //look inside node_modules and find the react package there, since we have import the useState from react
//import { Chatbot } from 'supersimpledev';
import Chatbot from './chatbot';
import { ChatInput } from './components/ChatInput'; //when import JSX, if we use VIte as build tool, we don't have to add .jsx or .js add the end
import ChatMessages from './components/ChatMessages'; // for default export, we don't have to type the curly brackets anymore
import './App.css'; // import the style for the App (Vite feature: let us import any type of files)


function App() {
  const [chatMessages, setChatMessages] = useState([]); //we no longer need to do "useState"

  useEffect(() => {
    Chatbot.addResponses({
      'Nadeshiko chan': 'Haiiiii (˶˃ ᵕ ˂˶) .ᐟ.ᐟ',
      'Nani ga suki?': [
        'Tabehoudai!!!',
        'Yori mo anata! ( //>///<//)♡'
      ],
      'Who is "Duc" best waifu': 'Oh, hehe~! I don\'t know who this "Đức" person is you\'re talking about, but from what you told me, it sounds a lot like Skadi from Arknights! ✨ (๑>ᴗ<๑)',
      'goodbye': 'Bye-bye! Hope you have a great day! (づ> v <)づ♡',


    });

  // [] tells useEffect to only run once. We only want to run
  // this setup code once because we only want to add these
  // extra responses once.
  }, []);

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
