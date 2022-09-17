import { View, Text, KeyboardAvoidingView, Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Chatscreen from "./Screens/Chatscreen";
import Homescreen from "./Screens/Homescreen";
import { AuthProvider } from "./Hooks/useAuth";
import LoginScreen from "./Screens/LoginScreen";
import Login from "./Screens/Login";
import Signup from "./Screens/signup"

export default function App() {
  const Stack = createStackNavigator();
  const User = true;
  return (
    <NavigationContainer>
            {/* HOC  -high order component */}
            <Stack.Navigator>
             
                  <Stack.Screen name="homescreen" component={Homescreen} />
                  <Stack.Screen name="chatscreen" component={Chatscreen} />
              
              
            </Stack.Navigator>
    </NavigationContainer>
  );
}
