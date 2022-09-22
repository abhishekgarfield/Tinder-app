import { useNavigation } from "@react-navigation/native";
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Icon } from "react-native-elements";
import { useSelector } from "react-redux";
import Swiper from "react-native-deck-swiper";
import { useEffect } from "react";

const Homescreen = () => {
  const navigation = useNavigation();
  const user = useSelector((state) => {
    return state.user.userinfo;
  });
  console.log(user);

  /* Get users for swiping */

  const FetchUsers = () => {
    const url = `http://localhost:8000/getusers?gender=${user.gender_interest}`;
    console.log("in fetch users");
    fetch(url, { method: "Get" })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  };
  useEffect(() => {
    FetchUsers();
  }, []);
  return (
    <SafeAreaView>
      {/*Header */}
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
      {/*Cards*/}
    </SafeAreaView>
  );
};
export default Homescreen;
