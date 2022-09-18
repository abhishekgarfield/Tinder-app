import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect, useState } from "react";
import {
  TextInput,
  TouchableOpacity,
  View,
  Text,
  ImageBackground,
  Image,
} from "react-native";
import { withTheme } from "react-native-elements";

const Signup = () => {
  const [Signupuser, setSingupuser] = useState({
    name: String,
    password: String,
    confirmPassword: String,
  });

  // signup function
  const handleSignup = () => {
    console.log(Signupuser);
  };
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <View style={{ flexGrow: 1, backgroundColor: "white" }}>
      <View
        style={{
          flexGrow: 1,
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <Image
          source={{ uri: "https://i.imgur.com/twh7tJk.png" }}
          style={{ height: 100, width: 100, marginBottom: 30 }}
        />
      </View>
      <View
        style={{
          flexGrow: 1,
          backgroundColor: "white",
          justifyContent: "flex-start",
        }}
      >
        <View
          style={{
            justifyContent: "center",
          }}
        >
          <View
            style={{
              padding: 10,
              marginHorizontal: 20,
            }}
          >
            <TextInput
              value={Signupuser.name}
              onChangeText={(newText) => {
                setSingupuser({ ...Signupuser, name: newText });
              }}
              style={{
                padding: 10,
                fontSize: 20,
                marginVertical: 5,
                backgroundColor: "rgb(232,232,232)",
              }}
              placeholder="Email"
            />
            <TextInput
              value={Signupuser.password}
              onChangeText={(newText) => {
                setSingupuser({ ...Signupuser, password: newText });
              }}
              style={{
                padding: 10,
                fontSize: 20,
                marginVertical: 5,
                backgroundColor: "rgb(232,232,232)",
              }}
              placeholder="Password"
            />
            <TextInput
              onChangeText={(newText) => {
                setSingupuser({ ...Signupuser, confirmPassword: newText });
              }}
              style={{
                padding: 10,
                fontSize: 20,
                marginVertical: 5,
                backgroundColor: "rgb(232,232,232)",
              }}
              placeholder="Confirm password"
            />
          </View>
          <View style={{ justifyContent: "center", flexDirection: "row" }}>
            <TouchableOpacity
              onPress={handleSignup}
              style={{
                backgroundColor: "red",
                padding: 13,
                paddingHorizontal: 30,
                alignItems: "center",
                borderRadius: 10,
              }}
            >
              <Text style={{ color: "white", fontWeight: "700", fontSize: 20 }}>
                Signup
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Signup;
