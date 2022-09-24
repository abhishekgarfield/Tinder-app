import { useRoute } from "@react-navigation/native";
import { useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";

const OnBoarding = () => {
  const {
    params: { Signupuser },
  } = useRoute();
  const [userdetails, setuserdetails] = useState({
    first_name: "",
    url: "",
    about: "",
    dob_day: "",
    dob_month: "",
    dob_year: "",
    gender_identity: "",
    gender_interest: "",
    matches: [],
    show_gender: false,
    url: "",
  });
  const handleSubmit = () => {
    const url = `http://localhost:8000/signup`;
    fetch(url, { method: "POST" })
      .then((res) => {
        res.json();
      })
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <>
      <SafeAreaView
        style={{
          flexGrow: 1,
          flexDirection: "column",
          backgroundColor: "white",
        }}
      ></SafeAreaView>
      <Image
        source={{ uri: "https://i.imgur.com/lMaH9U2.png" }}
        style={{
          height: 100,
          flexDirection: "column",
          backgroundColor: "white",
          marginBottom: 2,
        }}
      />
      <ScrollView
        style={{
          flexGrow: 1,
          flexDirection: "column",
          backgroundColor: "white",
        }}
      >
        <Text style={{ fontWeight: "400", fontSize: 20, padding: 15 }}>
          First name
        </Text>
        <TextInput
          style={{
            backgroundColor: "rgb(232,232,232)",
            padding: 15,
            fontSize: 20,
            borderRadius: 10,
            marginHorizontal: 10,
          }}
          placeholder="Firstname"
        />
        <Text style={{ fontWeight: "400", fontSize: 20, padding: 15 }}>
          About
        </Text>
        <TextInput
          style={{
            backgroundColor: "rgb(232,232,232)",
            padding: 15,
            fontSize: 20,
            borderRadius: 10,
            marginHorizontal: 10,
          }}
          placeholder="Write about yourself"
        />
        <View style={{ flexDirection: "row" }}>
          <View>
            <Text style={{ fontWeight: "400", fontSize: 20, padding: 15 }}>
              Day
            </Text>
            <TextInput
              style={{
                backgroundColor: "rgb(232,232,232)",
                padding: 15,
                fontSize: 20,
                borderRadius: 10,
                marginHorizontal: 10,
              }}
              placeholder="DD"
            />
          </View>
          <View style={{ flexGrow: 0 }}>
            <Text style={{ fontWeight: "400", fontSize: 20, padding: 15 }}>
              Month
            </Text>
            <TextInput
              style={{
                backgroundColor: "rgb(232,232,232)",
                padding: 15,
                fontSize: 20,
                borderRadius: 10,
                marginHorizontal: 10,
                flexGrow: 0,
                flexBasis: 10,
              }}
              placeholder="MM"
            />
          </View>
          <View>
            <Text style={{ fontWeight: "400", fontSize: 20, padding: 15 }}>
              Year
            </Text>
            <TextInput
              style={{
                backgroundColor: "rgb(232,232,232)",
                padding: 15,
                fontSize: 20,
                borderRadius: 10,
                marginHorizontal: 10,
              }}
              placeholder="YYYY"
            />
          </View>
        </View>
        <Text style={{ fontWeight: "400", fontSize: 20, padding: 15 }}>
          Gender
        </Text>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={{
              backgroundColor: "rgb(232,232,232)",
              padding: 15,
              fontSize: 20,
              borderRadius: 10,
              marginHorizontal: 10,
            }}
          >
            <Text style={{ fontSize: 20, textAlign: "center" }}>Male</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "rgb(232,232,232)",
              padding: 15,
              fontSize: 20,
              borderRadius: 10,
              marginHorizontal: 10,
            }}
          >
            <Text style={{ fontSize: 20, textAlign: "center" }}>Female</Text>
          </TouchableOpacity>
        </View>
        <Text style={{ fontWeight: "400", fontSize: 20, padding: 15 }}>
          Intrested in
        </Text>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={{
              backgroundColor: "rgb(232,232,232)",
              padding: 15,
              fontSize: 20,
              borderRadius: 10,
              marginHorizontal: 10,
            }}
          >
            <Text style={{ fontSize: 20, textAlign: "center" }}>Male</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "rgb(232,232,232)",
              padding: 15,
              fontSize: 20,
              borderRadius: 10,
              marginHorizontal: 10,
            }}
          >
            <Text style={{ fontSize: 20, textAlign: "center" }}>Female</Text>
          </TouchableOpacity>
        </View>
        <Text style={{ fontWeight: "400", fontSize: 20, padding: 15 }}>
          Enter url
        </Text>
        <TextInput
          style={{
            backgroundColor: "rgb(232,232,232)",
            padding: 15,
            fontSize: 20,
            borderRadius: 10,
            marginHorizontal: 10,
          }}
          placeholder="Profile pic url"
        />
        <TouchableOpacity
          style={{
            backgroundColor: "#FF5864",
            padding: 15,
            fontSize: 20,
            borderRadius: 10,
            marginHorizontal: 10,
            marginVertical: 10,
          }}
        >
          <Text
            style={{ fontSize: 20, textAlign: "center", fontWeight: "700" }}
          >
            Signup
          </Text>
        </TouchableOpacity>
      </ScrollView>
      <SafeAreaView style={{ backgroundColor: "white" }}></SafeAreaView>
    </>
  );
};

export default OnBoarding;
