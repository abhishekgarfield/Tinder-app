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

const Appwrapper = () => {
  const Stack = createStackNavigator();
  const user = useSelector((state) => state.user.userinfo);
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Provider store={store}>
          <KeyboardAvoidingView
            style={{ flexGrow: 1 }}
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS == "ios" ? -64 : 0}
          >
            {/* HOC  -high order component */}
            <Stack.Navigator>
              {user ? (
                <>
                  <Stack.Screen name="homescreen" component={Homescreen} />
                  <Stack.Screen name="chatscreen" component={Chatscreen} />
                </>
              ) : (
                <>
                  <Stack.Screen name="loginscreen" component={LoginScreen} />
                  <Stack.Screen name="login" component={Login} />
                  <Stack.Screen name="signup" component={Signup} />
                </>
              )}
            </Stack.Navigator>
          </KeyboardAvoidingView>
        </Provider>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default Appwrapper;