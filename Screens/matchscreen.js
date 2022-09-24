import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { Navigation } from "react-native-navigation";

const MatchScreen = () => {
  const [active,setActive]=useState(true);
  setTimeout(()=>{setActive(false)},8000)
  const navigation = useNavigation();
  const {
    params: { matchedUser, currentuser },
  } = useRoute();
  return (
    <SafeAreaView
      style={{
        flexGrow: 1,
        backgroundColor: "#FF5864",
        justifyContent: "center",
      }}
    >
      <Image
        source={{ uri: "https://links.papareact.com/mg9" }}
        style={{
          height: 90,
          flexDirection: "column",
          resizeMode: "contain",
          marginBottom: 10,
        }}
      />
      <Text
        style={{ textAlign: "center", color: "white", fontSize: 18 }}
      >{`You and ${matchedUser.first_name} have liked each other`}</Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginHorizontal: 30,
          marginBottom: 80,
          marginTop: 40,
        }}
      >
        <Image
          source={{ uri: currentuser.url }}
          style={{ height: 150, width: 150, borderRadius: 100 }}
        />
        <Image
          source={{ uri: matchedUser.url }}
          style={{ height: 150, width: 150, borderRadius: 100 }}
        />
      </View>
      <TouchableOpacity
      
      disabled={active}
        style={active?{
          backgroundColor: "lightgrey",
          borderRadius: 30,
          marginHorizontal: 30,
        }:{
          backgroundColor: "white",
          borderRadius: 30,
          marginHorizontal: 30,
        }}
        onPress={() => {
          navigation.navigate("chatscreen");
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "600",
            textAlign: "center",
            padding: 20,
          }}
        >
          Send a message
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default MatchScreen;
