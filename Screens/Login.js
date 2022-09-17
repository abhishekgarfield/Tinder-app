import { useNavigation } from "@react-navigation/native";
import { TextInput, TouchableOpacity, View ,Text} from "react-native";

const Login=()=>{
    const navigate=useNavigation();
    return(
        <View>
            <View>
            <TextInput/>
            <TextInput/>
            </View>
            <View>
                <TouchableOpacity>
                    <Text>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Login;