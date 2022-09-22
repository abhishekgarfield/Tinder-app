import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect, useState } from "react";
import {
  TextInput,
  TouchableOpacity,
  View,
  Text,
  Image,
  ActivityIndicator,
} from "react-native";
import { Icon } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import { isloading } from "../Hooks/loading";
import { signin } from "../Hooks/useAuth";

const Login = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => {
    return state.loader.isloading;
  });
  const [LoginUser, setLoginUser] = useState({
    email: null,
    password: null,
  });
  const [error, setError] = useState(null);

  // Login

  const handleLogin = async () => {
    console.log(LoginUser);
    // Routing
    dispatch(isloading(true));
    const url = `http://localhost:8000/login`;

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(LoginUser),
    })
      .then((res) => {
        if (res.status == 409) {
          res.json().then((err) => {
            setError(err);
            dispatch(isloading(false));
          });
        } else {
          res.json().then((data) => {
            dispatch(isloading(false));
            dispatch(signin(data));
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });

    //const response=await axios.post("http://localhost:8000/login",LoginUser);
    //console.log(response.data);
  };

  // Layout effect

  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <>
      {isLoading && (
        <View style={{ flexGrow: 1 }}>
          <ActivityIndicator
            color={"red"}
            size={"large"}
            style={{
              flexGrow: 1,
              justifyContent: "flex-end",
              marginBottom: 20,
            }}
          />
          <Text
            style={{
              flexGrow: 0.9,
              textAlign: "center",
              fontSize: 25,
              alignItems: "flex-start",
              fontWeight: "500",
            }}
          >
            Signing in ...
          </Text>
        </View>
      )}
      {!isLoading && (
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
                  style={{
                    padding: 10,
                    fontSize: 20,
                    marginVertical: 5,
                    backgroundColor: "rgb(232,232,232)",
                  }}
                  onChangeText={(newText) => {
                    setLoginUser({ ...LoginUser, email: newText });
                  }}
                  placeholder="Email"
                />
                <TextInput
                  style={{
                    padding: 10,
                    fontSize: 20,
                    marginVertical: 5,
                    backgroundColor: "rgb(232,232,232)",
                  }}
                  placeholder="Password"
                  onChangeText={(newText) => {
                    setLoginUser({ ...LoginUser, password: newText });
                  }}
                />
                {error && (
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
                    <Text style={{ color: "red", marginLeft: 2 }}>{error}</Text>
                  </View>
                )}
              </View>
              <View style={{ justifyContent: "center", flexDirection: "row" }}>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#FF5864",
                    padding: 13,
                    paddingHorizontal: 30,
                    alignItems: "center",
                    borderRadius: 10,
                  }}
                  onPress={handleLogin}
                >
                  <Text
                    style={{ color: "white", fontWeight: "700", fontSize: 20 }}
                  >
                    Login
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      )}
    </>
  );
};

export default Login;
