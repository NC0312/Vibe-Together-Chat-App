import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

const projectID = 'ca0fb62d-373e-4a72-b231-25036fc50f58';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
    //   renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};

// infinite scroll, logout, more customizations...

export default App;


// import { ChatEngine } from 'react-chat-engine';

// import ChatFeed from './components/ChatFeed';
// import LoginForm from './components/LoginForm';
// import './App.css';


// const App = () => {

//   return (
//     <ChatEngine
//       height="100vh"
//       projectID="ca0fb62d-373e-4a72-b231-25036fc50f58"
//       userName="Niket"
//       userSecret="Niketan@0312"
//     />
//   );
// };

// // infinite scroll, logout, more customizations...

// export default App;