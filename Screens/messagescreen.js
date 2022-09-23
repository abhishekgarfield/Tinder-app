import { useRoute } from "@react-navigation/native";
import { useState } from "react";
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
      
    </SafeAreaView>
  );
};

export default Messagescreen;
