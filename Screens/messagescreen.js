import { useRoute } from "@react-navigation/native";
import { SafeAreaView, TextInput, View } from "react-native";
import Header from "../Components/header";
import Messages from "../Components/messages";
const Messagescreen = () => {
  const {
    params: { user },
  } = useRoute();
  console.log(user);
  return (
    <SafeAreaView style={{ flexGrow: 1 }}>
      <Header title={user} callenabled={true} />
      <Messages selecteduser={user} />
      <TextInput
        placeholder="Type your message"
        style={{
          padding: 20,
          backgroundColor: "lightgrey",
          marginHorizontal: 20,
          fontSize: 20,
          borderRadius: 10,
        }}
      />
    </SafeAreaView>
  );
};

export default Messagescreen;
