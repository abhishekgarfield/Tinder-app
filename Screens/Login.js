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

const Login = () => {
  const [LoginUser,setLoginUser]=useState({
    email:null,
    password:null
  })
  const navigation = useNavigation();
  useLayoutEffect(()=>{
    navigation.setOptions({
      headerShown:false
    })
     },[])
  return (
    <View style={{ flexGrow: 1 ,backgroundColor:"white"}}>
      <View
        style={{
          flexGrow:1,
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
              padding: 10,marginHorizontal:20
            }}
          >
            <TextInput
              style={{
                padding: 10,
                fontSize: 20,
                marginVertical:5,
                backgroundColor:"rgb(232,232,232)"
              }}
              
              placeholder="Email"
            />
            <TextInput
              style={{  padding: 10, fontSize: 20,marginVertical:5,backgroundColor:"rgb(232,232,232)", }}
              placeholder="Password"
            />
          </View>
          <View style={{ justifyContent:"center",flexDirection:"row"}}>
            <TouchableOpacity
              style={{
                backgroundColor: "red",
                padding: 13,
                paddingHorizontal: 30,
                alignItems: "center",
                borderRadius: 10,
              }}
            >
              <Text style={{ color: "white", fontWeight: "700", fontSize: 20 }}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Login;
