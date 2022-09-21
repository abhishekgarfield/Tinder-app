import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { Text, View } from "react-native";
import { Icon } from "react-native-elements";
import { useSelector } from "react-redux";
import useAuth from "../Hooks/useAuth";

const Homescreen = () => {
  const navigation = useNavigation();
  const user=useSelector((state)=>{return state.user.userinfo})
  return (
    <View>
      <Text
        onPress={() => {
          navigation.navigate("chatscreen");
        }}
      >
        homescreen !
      </Text>
      <Text>{user.email}</Text>
      <Icon type="ionicon" name="add-outline" />
    </View>
  );
};
export default Homescreen;
