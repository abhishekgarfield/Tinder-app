import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { Text, View } from "react-native";
import { Icon } from "react-native-elements";
import useAuth from "../Hooks/useAuth";

const Homescreen = () => {
  const navigation = useNavigation();
  const user=useAuth();
  return (
    <View>
      <Text
        onPress={() => {
          navigation.navigate("chatscreen");
        }}
      >
        homescreen !
      </Text>
      <Text>{user.user}</Text>
      <Icon type="ionicon" name="add-outline" />
    </View>
  );
};
export default Homescreen;
