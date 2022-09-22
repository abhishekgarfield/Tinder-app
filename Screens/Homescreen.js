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
import { useEffect, useLayoutEffect, useRef, useState } from "react";

const data = [
  {
    user_id: "8298de89-7233-4aec-883b-35951e2c82e1",
    email: "abhishek@123",
    hashed_password:
      "$2b$10$Ik9wnWzGGwq26fQ4hFwC7.k/44bPzmpBCzhL2YpMhhtBOWiBGBrmC",
    about: "i m a web developer",
    dob_day: "23",
    dob_month: "04",
    dob_year: "1999",
    first_name: "Abhishek",
    gender_identity: "man",
    gender_interest: "woman",
    matches: [[Object]],
    show_gender: true,
    url: "https://i.imgur.com/o4Jt65R.jpg",
  },
  {
    user_id: "a2fe5331-6d31-41c4-89df-c682d3b99f60",
    email: "harsh@123",
    hashed_password:
      "$2b$10$D59u17RHZ8MvbleLg4Gnp.ZyKi2WTXq0B3C2PAY9xsEkys94EFHIq",
    about: "i m from bella",
    dob_day: "30",
    dob_month: "08",
    dob_year: "1998",
    first_name: "Harsh",
    gender_identity: "man",
    gender_interest: "woman",
    matches: [],
    show_gender: false,
    url: "https://i.imgur.com/AahuTEb.jpg",
  },
];
const Homescreen = () => {
  const swipeRef = useRef(null);
  const date = new Date();
  const navigation = useNavigation();
  const [genderedUsers, setGenderedUsers] = useState(null);
  const user = useSelector((state) => {
    return state.user.userinfo;
  });

  /* Get users for swiping 

  const FetchUsers = () => {
    //const url = `http://localhost:8000/getusers?gender=${user.gender_interest}`;
    console.log("in fetch users");
    fetch(url, { method: "Get" })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setGenderedUsers(data);
      });
  };
  useLayoutEffect(() => {
    FetchUsers();
  }, []);
  */
  return (
    <SafeAreaView style={{ flexGrow: 1 }}>
      {/*Header */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 12,
          alignItems: "center",
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
      <View style={{ flexGrow: 1, marginTop: -20 }}>
        {data && (
          <Swiper
            cards={data}
            ref={swipeRef}
            containerStyle={{ backgroundColor: "transparent", flexGrow: 1 }}
            renderCard={(card) => (
              <View
                style={{
                  backgroundColor: "white",
                  borderRadius: 10,
                  shadowOffset: { height: 10, width: 3 },
                  shadowOpacity: 0.2,
                  shadowColor: "#000",
                }}
              >
                <Image
                  source={{ uri: card.url }}
                  style={{
                    height: 550,
                    flexDirection: "column",
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                  }}
                />
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: 10,
                  }}
                >
                  <View style={{ flexDirection: "column", padding: 10 }}>
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: "bold",
                        marginBottom: 2,
                      }}
                    >
                      {card.first_name}
                    </Text>
                    <Text style={{ fontSize: 15 }}>{card.about}</Text>
                  </View>
                  <Text style={{ fontSize: 23, fontWeight: "600" }}>
                    {date.getFullYear() - card.dob_year}
                  </Text>
                </View>
              </View>
            )}
          />
        )}
      </View>
      <View
        style={{
          flexGrow: 1,
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "flex-end",
        }}
      >
        <TouchableOpacity onPress={() => {}}>
          <Icon
            name="cross"
            type="entypo"
            color={"green"}
            style={{
              backgroundColor: "lightgreen",
              padding: 23,
              borderRadius: 50,
            }}
          />
        </TouchableOpacity>
        <Icon
          name="heart"
          type="antdesign"
          color={"pink"}
          style={{ backgroundColor: "#FF5864", padding: 23, borderRadius: 50 }}
        />
      </View>
    </SafeAreaView>
  );
};
export default Homescreen;
