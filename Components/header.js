import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";

const Header = ({ title, callenabled }) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "white",
          borderColor: "lightgrey",
          borderWidth: 2,
          padding: 20,
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{ position: "absolute", left: 0, alignItems: "center" }}
          onPress={() => {
            if(title=="Chat")
            {
            navigation.navigate("homescreen");
            }
            else{
              navigation.goBack();
            }
          }}
        >
          <Icon name="chevron-left" type="entypo" color={"red"} size={40} />
        </TouchableOpacity>
        <Text style={{ fontSize: 25, marginLeft: 40, fontWeight: "500" }}>
          {title}
        </Text>
        {callenabled && (
          <Icon name="phone" type="entypo" color={"red"} size={30} />
        )}
      </View>
    </SafeAreaView>
  );
};
export default Header;
