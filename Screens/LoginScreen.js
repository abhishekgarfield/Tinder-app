import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { ImageBackground, TouchableOpacity, View, Text } from "react-native";

const LoginScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <View style={{ flexGrow: 1, justifyContent: "center" }}>
      <ImageBackground
        source={{ uri: "https://tinder.com/static/tinder.png" }}
        style={{ flexGrow: 1, alignItems: "center", flexDirection: "column" }}
      >
        <View style={{ position: "absolute", width: 250, bottom: 180 }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("login");
            }}
            style={{
              backgroundColor: "red",
              flexGrow: 1,
              padding: 13,
              alignItems: "center",
              marginVertical: 12,
              borderRadius: 10,
            }}
          >
            <Text style={{ color: "white", fontWeight: "700", fontSize: 18 }}>
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("signup");
            }}
            style={{
              backgroundColor: "red",
              flexGrow: 1,
              padding: 13,
              alignItems: "center",
              borderRadius: 10,
            }}
          >
            <Text style={{ color: "white", fontWeight: "700", fontSize: 18 }}>
              Signup
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;
