import { useNavigation } from "@react-navigation/native";
import { Text, View } from "react-native";
import { Icon } from "react-native-elements";

const Homescreen = () => {
    const navigation=useNavigation();
  return(
  <View>
    <Text
    onPress={()=>{
        navigation.navigate("chatscreen");
    }}>homescreen !</Text>
    <Icon
    type="ionicon"
    name="add-outline"/>
  </View>);
};
export default Homescreen;
