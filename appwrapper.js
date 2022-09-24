import { KeyboardAvoidingView, Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Chatscreen from "./Screens/Chatscreen";
import Homescreen from "./Screens/Homescreen";
import LoginScreen from "./Screens/LoginScreen";
import Login from "./Screens/Login";
import Signup from "./Screens/signup";
import { Provider, useSelector } from "react-redux";
import { store } from "./store";
import MatchScreen from "./Screens/matchscreen";
import Messagescreen from "./Screens/messagescreen";
import Signput from "./Screens/Signout";
import OnBoarding from "./Screens/onboarding";

const Appwrapper = () => {
  const Stack = createStackNavigator();
  const user = useSelector((state) => state.user.userinfo);
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Provider store={store}>
          {/* HOC  -high order component */}
          <Stack.Navigator>
            {user ? (
              <>
                <Stack.Screen
                  name="homescreen"
                  component={Homescreen}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="matchscreen"
                  component={MatchScreen}
                  options={{ headerShown: false, presentation: "modal" }}
                />
                <Stack.Screen
                  name="chatscreen"
                  component={Chatscreen}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="messagescreen"
                  component={Messagescreen}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="signout"
                  component={Signput}
                  options={{ headerShown: false, presentation: "card" }}
                />
              </>
            ) : (
              <>
                <Stack.Screen name="loginscreen" component={LoginScreen} />
                <Stack.Screen name="login" component={Login} />
                <Stack.Screen name="signup" component={Signup} />
                <Stack.Screen name="onboarding" component={OnBoarding} 
                options={{headerShown:false}}/>
              </>
            )}
          </Stack.Navigator>
        </Provider>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default Appwrapper;
