import { useNavigation } from "@react-navigation/native";
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Icon } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import Swiper from "react-native-deck-swiper";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { signin } from "../Hooks/useAuth";

const Homescreen = () => {
  const dispatch=useDispatch();
  const swipeRef = useRef(null);
  const date = new Date();
  const navigation = useNavigation();
  const [genderedUsers, setGenderedUsers] = useState(null);
  const user = useSelector((state) => {
    return state.user.userinfo;
  });

  // update user

  const updateUser = () => {
    console.log("in update")
    const url="http://localhost:8000/updateuser"
    fetch(url, {
      method: "Put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user_id: user.user_id }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data)=>{
        console.log(data);
        
        dispatch(signin(data));
      })

      .catch((err) => {
        console.log(err);
      });
  };
  /* Get users for swiping  */

  const FetchUsers = () => {
    const url = `http://localhost:8000/getusers?gender=${user.gender_interest}`;
    console.log("in fetch users");
    fetch(url, { method: "Get" })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setGenderedUsers(data);
      });
  };

  // Add match
  const addMatch = (matcheduser) => {
    console.log("In add match");

    const url = `http://localhost:8000/addmatch`;
    fetch(url, {
      method: "Put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        matcheduser_id: matcheduser.user_id,
        user_id: user.user_id,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((Data) => {
        console.log(Data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const matches = user.matches
    ?.map(({ user_id }) => {
      return user_id;
    })
    .concat(user.user_id);
  const filteredGenderedUsers = genderedUsers?.filter((swipeuser) => {
    return !matches.includes(swipeuser.user_id);
  });
  useLayoutEffect(() => {
    FetchUsers();
  }, []);

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
        {filteredGenderedUsers && (
          <Swiper
            cards={filteredGenderedUsers}
            ref={swipeRef}
            onSwipedRight={(card) => {
              addMatch(filteredGenderedUsers[card]);
              updateUser();
              if (
                filteredGenderedUsers[card].matches.some(({ user_id }) => {
                  return (user_id == user.user_id);
                })
              )
                navigation.navigate("matchscreen", {
                  matchedUser: filteredGenderedUsers[card],
                  currentuser: user,
                });
              else {
                return;
              }
            }}
            onSwipedLeft={() => {
              console.log("nope");
              updateUser();
            }}
            cardIndex={0}
            backgroundColor={"#4FD0E9"}
            stackSize={5}
            containerStyle={{ backgroundColor: "transparent", flexGrow: 1 }}
            renderCard={(card) =>
              card ? (
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
              ) : (
                <View
                  style={{
                    backgroundColor: "white",
                  }}
                >
                  <Image
                    source={{ uri: "https://links.papareact.com/6gb" }}
                    style={{
                      height: 500,
                      flexGrow: 1,
                      resizeMode: "contain",
                      borderTopLeftRadius: 10,
                      borderTopRightRadius: 10,
                    }}
                  />
                  <Text
                    style={{
                      fontWeight: "500",
                      textAlign: "center",
                      fontSize: 20,
                      paddingVertical: 20,
                    }}
                  >
                    No more Profiles
                  </Text>
                </View>
              )
            }
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
        <TouchableOpacity
          onPress={() => {
            swipeRef.current.swipeLeft();
          }}
        >
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
        <TouchableOpacity
          onPress={() => {
            swipeRef.current.swipeRight();
          }}
        >
          <Icon
            name="heart"
            type="antdesign"
            color={"pink"}
            style={{
              backgroundColor: "#FF5864",
              padding: 23,
              borderRadius: 50,
            }}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default Homescreen;
