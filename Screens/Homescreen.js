import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Icon } from "react-native-elements";
import { useSelector } from "react-redux";
import useAuth from "../Hooks/useAuth";

const Homescreen = () => {
  const navigation = useNavigation();
  const user = useSelector((state) => {
    return state.user.userinfo;
  });
  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 12,
        }}
      >
        <Image
          source={{ uri: user.url }}
          style={{ height: 45, width: 45, borderRadius: 50 }}
        />
        <Image
          source={{ uri: "https://i.imgur.com/twh7tJk.png" }}
          style={{ height: 55, width: 55 }}
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("chatscreen");
          }}
        >
          <Icon
            type="ionicon"
            name="chatbubbles-sharp"
            color={"#FF5864"}
            size={40}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default Homescreen;
