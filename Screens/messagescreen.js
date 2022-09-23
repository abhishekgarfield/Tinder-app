import { useRoute } from "@react-navigation/native";
import { SafeAreaView, Text, TextInput, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
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
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "lightgrey",
          marginHorizontal: 20,
          alignItems:"center",
          borderRadius:10
        }}
      >
        <TextInput
          placeholder="Type your message"
          style={{
            padding: 20,
            flexGrow:1,
            flexBasis:20,
            fontSize: 20,
            borderRadius: 10,
          }}
        />
        <TouchableOpacity style={{ color: "#FF5864", padding: 20,borderRadius:10 }}>
          <Text style={{color: "#FF5864",fontWeight:"700",fontSize:20}}>Send</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Messagescreen;
