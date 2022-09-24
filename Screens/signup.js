import { useNavigation } from "@react-navigation/native";
import { useEffect, useLayoutEffect, useState, } from "react";
import {
  TextInput,
  TouchableOpacity,
  View,
  Text,
  KeyboardAvoidingView,
  Image,
  StyleSheet,
} from "react-native";
import { Icon } from "react-native-elements";

const Signup = () => {
  const [Signupuser, setSignupuser] = useState({
    email: null,
    password: null,
    confirmPassword: null,
  });
  const [error, setError] = useState({
    email: { value: null, description: null },
    password: { value: null, description: "" },
    confirmPassword: { value: null, description: "" },
  });

  // signup function
  const handleSignup = () => {
    // confirm password

    if (Signupuser.confirmPassword != Signupuser.password) {
      setError({
        ...error,
        confirmPassword: {
          value: true,
          description: "Passwords don't match",
        },
      });
    } else {
      setError({
        ...error,
        confirmPassword: {
          value: false,
          description: "",
        },
      });
      const url = `http://localhost:8000/signup`;
      fetch(url, { method: "POST" })
        .then((res) => {
          res.json();
        })
        .then((data) => {
          console.log(data);
        });
    }
  };
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  useEffect(() => {}, [error.confirmPassword]);
  return (
    <KeyboardAvoidingView
      style={{ flexGrow: 1 }}
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS == "ios" ? -64 : 0}
    >
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
              value={Signupuser.email}
              onChangeText={(newText) => {
                setSignupuser({ ...Signupuser, email: newText });
                if (Signupuser.email?.trim().length <= 2) {
                  setError({
                    ...error,
                    email: {
                      value: true,
                      description: "User name should be >2",
                    },
                  });
                } else if (
                  Signupuser.email
                    ?.trim()
                    .match(
                      "^(([A-Za-z0-9.]+)([@]{1})([a-zA-z0-9.]+)([.]{1})([a-zA-z]{2,3}))$"
                    ) == null
                ) {
                  setError({
                    ...error,
                    email: {
                      value: true,
                      description: "Email should be of type test@123.com",
                    },
                  });
                } else {
                  setError({
                    ...error,
                    email: { value: false, description: "" },
                  });
                }
              }}
              style={
                error.email.value
                  ? styles.error
                  : {
                      padding: 10,
                      fontSize: 20,
                      marginVertical: 5,
                      backgroundColor: "rgb(232,232,232)",
                    }
              }
              placeholder="Email"
            />
            {error.email.value && (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <Icon
                  type="ionicon"
                  name="alert-circle-outline"
                  size={20}
                  color="red"
                />
                <Text style={{ color: "red" }}>{error.email.description}</Text>
              </View>
            )}
            <TextInput
              value={Signupuser.password}
              secureTextEntry={true}
              onChangeText={(newText) => {
                setSignupuser({ ...Signupuser, password: newText });
                if (Signupuser.password?.length > 0)
                  setError({
                    ...error,
                    password: { value: true, description: "weak" },
                  });
                if (Signupuser.password?.length > 3) {
                  setError({
                    ...error,
                    password: { value: true, description: "medium" },
                  });
                  if (Signupuser.password.length > 6) {
                    setError({
                      ...error,
                      password: { value: true, description: "strong" },
                    });
                  }
                }
              }}
              style={{
                padding: 10,
                fontSize: 20,
                marginVertical: 5,
                backgroundColor: "rgb(232,232,232)",
              }}
              placeholder="Password"
            />
            {error.password.value && (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  flexGrow: 1,
                }}
              >
                {(error.password.description == "weak" ||
                  error.password.description == "medium" ||
                  error.password.description == "strong") && (
                  <>
                    <View
                      style={{
                        backgroundColor: "red",
                        borderColor: "lightgrey",
                        borderWidth: 1,
                        flexGrow: 1,
                        width: 10,
                        height: 10,
                      }}
                    ></View>
                    <View
                      style={{
                        backgroundColor: "red",
                        borderColor: "lightgrey",
                        borderWidth: 1,
                        flexGrow: 1,
                        width: 10,
                        height: 10,
                      }}
                    ></View>
                    <View
                      style={{
                        backgroundColor: "red",
                        borderColor: "lightgrey",
                        borderWidth: 1,
                        flexGrow: 1,
                        width: 10,
                        height: 10,
                      }}
                    ></View>
                  </>
                )}
                {(error.password.description == "medium" ||
                  error.password.description == "strong") && (
                  <>
                    <View
                      style={{
                        backgroundColor: "yellow",
                        borderColor: "lightgrey",
                        borderWidth: 1,
                        flexGrow: 1,
                        width: 10,
                        height: 10,
                      }}
                    ></View>
                    <View
                      style={{
                        backgroundColor: "yellow",
                        borderColor: "lightgrey",
                        borderWidth: 1,
                        flexGrow: 1,
                        width: 10,
                        height: 10,
                      }}
                    ></View>
                    <View
                      style={{
                        backgroundColor: "yellow",
                        borderColor: "lightgrey",
                        borderWidth: 1,
                        flexGrow: 1,
                        width: 10,
                        height: 10,
                      }}
                    ></View>
                  </>
                )}
                {error.password.description == "strong" && (
                  <>
                    <View
                      style={{
                        backgroundColor: "green",
                        borderColor: "lightgrey",
                        borderWidth: 1,
                        flexGrow: 1,
                        width: 10,
                        height: 10,
                      }}
                    ></View>
                    <View
                      style={{
                        backgroundColor: "green",
                        borderColor: "lightgrey",
                        borderWidth: 1,
                        flexGrow: 1,
                        width: 10,
                        height: 10,
                      }}
                    ></View>
                    <View
                      style={{
                        backgroundColor: "green",
                        borderColor: "lightgrey",
                        borderWidth: 1,
                        flexGrow: 1,
                        width: 10,
                        height: 10,
                      }}
                    ></View>
                  </>
                )}
              </View>
            )}
            <TextInput
            secureTextEntry={true}
              onChangeText={(newText) => {
                setSignupuser({ ...Signupuser, confirmPassword: newText });
              }}
              style={{
                padding: 10,
                fontSize: 20,
                marginVertical: 5,
                backgroundColor: "rgb(232,232,232)",
              }}
              placeholder="Confirm password"
            />
            {error.confirmPassword.value && (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <Icon
                  type="ionicon"
                  name="alert-circle-outline"
                  size={20}
                  color="red"
                />

                <Text
                  style={
                    error.email ? { color: "red" } : { color: "red", height }
                  }
                >
                  {error.confirmPassword.description}
                </Text>
              </View>
            )}
          </View>
          <View style={{ justifyContent: "center", flexDirection: "row" }}>
            <TouchableOpacity
              onPress={handleSignup}
              style={{
                backgroundColor: "#FF5864",
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
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  error: {
    borderColor: "red",
    borderWidth: 1,
    padding: 10,
    fontSize: 20,
    marginVertical: 5,
    backgroundColor: "rgb(232,232,232)",
  },
  valid: {
    borderColor: "green",
    padding: 10,
    fontSize: 20,
    marginVertical: 5,
    backgroundColor: "rgb(232,232,232)",
  },
});
export default Signup;
