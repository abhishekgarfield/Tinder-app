import { View, Text } from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Chatscreen from "./Screens/Chatscreen";
import Homescreen from "./Screens/Homescreen";
import { AuthProvider } from "./Hooks/useAuth";
import LoginScreen from "./Screens/LoginScreen";
import Login from "./Screens/Login";

export default function App() {
  const Stack = createStackNavigator();
  const User = false;
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <AuthProvider>
          {/* HOC  -high order component */}
          <Stack.Navigator>
            {User ? (
              <>
                <Stack.Screen name="homescreen" component={Homescreen} />
                <Stack.Screen name="chatscreen" component={Chatscreen} />
              </>
            ) : (
              <>
              <Stack.Screen name="loginscreen" component={LoginScreen} />
              <Stack.Screen name="login" component={Login}/>
              </>
            )}
          </Stack.Navigator>
        </AuthProvider>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
