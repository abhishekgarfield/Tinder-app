import { Text } from "react-native";
import Header from "../Components/header";
import Chat from "../Components/chat";

const Chatscreen = () => {
  return (
    <>
      <Header title={"Chat"} callenabled={false} />
      <Chat />
    </>
  );
};
export default Chatscreen;
