import { useNavigation } from "@react-navigation/native";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import { Icon } from "react-native-elements";

const Header = ({ title, callenabled }) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View
        style={title=="Chat"?{
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "white",
          borderColor: "transparent",
          borderWidth: 2,
          padding: 20,
          alignItems: "center",
        }:{
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "white",
          borderColor: "transparent",
          borderWidth: 2,
          paddingVertical: 11,
          paddingHorizontal:12,
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{ position: "absolute", left: 0, alignItems: "center" }}
          onPress={() => {
            if (title == "Chat") {
              navigation.navigate("homescreen");
            } else {
              navigation.goBack();
            }
          }}
        >
          <Icon name="chevron-left" type="entypo" color={"red"} size={40} />
        </TouchableOpacity>
        {title == "Chat" ? (
          <Text style={{ fontSize: 25, marginLeft: 40, fontWeight: "500" }}>
            {title}
          </Text>
        ) : (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 30,
            }}
          >
            <Image
              source={{ uri: title.url }}
              style={{ height: 60, width: 60, borderRadius: 50 }}
            />
            <Text style={{fontSize:20,fontWeight:"600",marginLeft:10}}>{title.first_name}</Text>
          </View>
        )}
        {callenabled && (
          <Icon name="phone" type="entypo" color={"red"} size={30} />
        )}
      </View>
    </SafeAreaView>
  );
};
export default Header;
