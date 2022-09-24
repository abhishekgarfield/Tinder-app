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
    const temp={...Signupuser,...userdetails}
    const url = `http://localhost:8000/signup`;
    fetch(url, { method: "POST",
    headers:{"Content-Type":"application/json"},
body:JSON.stringify(temp) })
      .then((res) => {
        res.json();
      })
      .then((data) => {
        console.log(data);
      });*/
    console.log({...Signupuser,...userdetails});
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
          defaultValue={userdetails.first_name}
          onChangeText={(newText) =>
            setuserdetails({ ...userdetails, first_name: newText })
          }
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
          defaultValue={userdetails.about}
          onChangeText={(newText) =>
            setuserdetails({ ...userdetails, about: newText })
          }
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
              defaultValue={userdetails.dob_day}
              onChangeText={(newText) =>
                setuserdetails({ ...userdetails, dob_day: newText })
              }
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
              defaultValue={userdetails.dob_month}
              onChangeText={(newText) =>
                setuserdetails({ ...userdetails, dob_month: newText })
              }
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
              defaultValue={userdetails.dob_year}
              onChangeText={(newText) =>
                setuserdetails({ ...userdetails, dob_year: newText })
              }
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
            onPress={() => {
              setuserdetails({ ...userdetails, gender_identity: "man" });
            }}
            style={
              userdetails.gender_identity == "man"
                ? {
                    backgroundColor: "rgb(232,232,232)",
                    padding: 15,
                    fontSize: 20,
                    borderRadius: 10,
                    borderColor: "#FF5864",
                    borderWidth: 3,
                    marginHorizontal: 10,
                  }
                : {
                    backgroundColor: "rgb(232,232,232)",
                    padding: 15,
                    
                    fontSize: 20,
                    borderRadius: 10,
                    marginHorizontal: 10,
                  }
            }
          >
            <Text style={{ fontSize: 20, textAlign: "center" }}>Man</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setuserdetails({ ...userdetails, gender_identity: "woman" });
            }}
            style={
              userdetails.gender_identity == "woman"
                ? {
                    backgroundColor: "rgb(232,232,232)",
                    padding: 15,
                    fontSize: 20,
                    borderRadius: 10,
                    marginHorizontal: 10,
                    borderColor: "#FF5864",
                    borderWidth: 3,
                  }
                : {
                    backgroundColor: "rgb(232,232,232)",
                    padding: 15,
                   
                    fontSize: 20,
                    borderRadius: 10,
                    marginHorizontal: 10,
                  }
            }
          >
            <Text style={{ fontSize: 20, textAlign: "center" }}>Woman</Text>
          </TouchableOpacity>
        </View>
        <Text style={{ fontWeight: "400", fontSize: 20, padding: 15 }}>
          Intrested in
        </Text>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => {
              setuserdetails({ ...userdetails, gender_interest: "man" });
            }}
            style={
              userdetails.gender_interest == "man"
                ? 
                  {
                    backgroundColor: "rgb(232,232,232)",
                    padding: 15,
                    borderColor: "#FF5864",
                    borderWidth: 3,
                    fontSize: 20,
                    borderRadius: 10,
                    marginHorizontal: 10,
                  }
                : {
                    backgroundColor: "rgb(232,232,232)",
                    padding: 15,
                    fontSize: 20,
                    borderRadius: 10,
                    marginHorizontal: 10,
                  }
            }
          >
            <Text style={{ fontSize: 20, textAlign: "center" }}>Man</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setuserdetails({ ...userdetails, gender_interest: "woman" });
            }}
            style={
              userdetails.gender_interest == "woman"
                ? {
                    backgroundColor: "rgb(232,232,232)",
                    padding: 15,
                    fontSize: 20,
                    borderRadius: 10,
                    borderColor: "#FF5864",
                    borderWidth: 3,
                    marginHorizontal: 10,
                  }
                : {
                    backgroundColor: "rgb(232,232,232)",
                    padding: 15,
                   
                    fontSize: 20,
                    borderRadius: 10,
                    marginHorizontal: 10,
                  }
            }
          >
            <Text style={{ fontSize: 20, textAlign: "center" }}>Woman</Text>
          </TouchableOpacity>
        </View>
        <Text style={{ fontWeight: "400", fontSize: 20, padding: 15 }}>
          Enter url
        </Text>
        <TextInput
          defaultValue={userdetails.url}
          onChangeText={(newText) =>
            setuserdetails({ ...userdetails, url: newText })
          }
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
          onPress={() => {
            handleSubmit();
          }}
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
