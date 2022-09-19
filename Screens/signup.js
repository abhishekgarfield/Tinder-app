import { useNavigation } from "@react-navigation/native";
import { useEffect, useLayoutEffect, useState } from "react";
import reactDom from "react-dom";
import {
  TextInput,
  TouchableOpacity,
  View,
  Text,
  Image,
  StyleSheet,
} from "react-native";

const Signup = () => {
  const [Signupuser, setSingupuser] = useState({
    email: null,
    password: null,
    confirmPassword: null,
  });
  const [error, setError] = useState({
    email: { value: null, description: null },
    password: { value: null, description: "" },
    confirmPassword:  { value: true, description: "" }
  });

  // signup function
  const handleSignup = () => {
    console.log(Signupuser.email);
    // email validation

    if(Signupuser.confirmPassword!=Signupuser.password)
    {
      setError({
        ...error,
        confirmPassword: {
          value: true,
          description: "Passwors don't match",
        },
      });
    }
    else{
      setError({
        ...error,
        confirmPassword: {
          value: false,
          description: "",
        },
      });
    }

    // confirm password  
    
  };
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  useEffect(()=>{

  },[error.confirmPassword])
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
              value={Signupuser.email}
              onChangeText={(newText) => {
                setSingupuser({ ...Signupuser, email: newText });
                if (Signupuser.email?.trim().length <= 2) {
     
                  setError({
                    ...error,
                    email: { value: true, description: "User name should be >2" },
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
             
                <Text
                  style={
                    {color:"red"}
                  }
                >
                  {error.email.description}
                </Text>
            )}
            <TextInput
              value={Signupuser.password}
              onChangeText={(newText) => {
                setSingupuser({ ...Signupuser, password: newText });
                console.log(Signupuser.password);
                if(Signupuser.password?.length>0)
                  setError({
                    ...error,
                    password: { value: true, description: "weak" },
                  });
                   if(Signupuser.password?.length>10)
                  {
                    setError({
                      ...error,
                      password: { value: true, description: "medium" },
                    });
                    if(Signupuser.password.length>15)
                  {
                    setError({
                      ...error,
                      password: { value: true, description: "strong" },
                    });
                  }
                  }
                }
                
              }
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
            {error.confirmPassword.value && (
              <View>
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
