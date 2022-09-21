import { View, Text, KeyboardAvoidingView, Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Chatscreen from "./Screens/Chatscreen";
import Homescreen from "./Screens/Homescreen";
import useAuth, { AuthProvider } from "./Hooks/useAuth";
import LoginScreen from "./Screens/LoginScreen";
import Login from "./Screens/Login";
import Signup from "./Screens/signup";
import { Provider, useSelector } from "react-redux";
import { store } from "./store";
import Appwrapper from "./appwrapper";

export default function App() {

  return (
    <Provider store={store}>
      <Appwrapper/>
    </Provider>
      );
}

