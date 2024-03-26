import { PrettyChatWindow } from "react-chat-engine-pretty";
// console.log(process.env.REACT_APP_CHAT_ENGINE_PROJECT_ID)

const ChatsPage = (props) => {
  return (
    <div className="background">
      <PrettyChatWindow
        projectId="794653df-052a-4ad2-b0aa-d6c251a10aef"
        username={props.user.username}
        secret={props.user.secret}
      />
    </div>
  );
};

export default ChatsPage;

