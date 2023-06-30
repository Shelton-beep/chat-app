import "./App.css";
import ChatFeed from "./components/ChatFeed";
import { ChatEngine } from "react-chat-engine";

const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID="
  23d9a472-590d-49f1-aa78-8d7240a566b7"
      userName="Mr Classic"
      userSecret="123"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
