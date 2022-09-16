import { View, Text } from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Chatscreen from "./Screens/Chatscreen";
  import Homescreen from "./Screens/Homescreen";

export default function App() {
  const Stack=createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="homescreen" component={Homescreen}/>
        <Stack.Screen name="chatscreen" component={Chatscreen}/>
      </Stack.Navigator>
      
    </NavigationContainer>
   
  );
}
