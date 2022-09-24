import { useNavigation } from "@react-navigation/native";
import { Image, SafeAreaView, Text, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import { Navigation } from "react-native-navigation";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../Hooks/useAuth";

const Signput = () => {
    const dispatch=useDispatch();
    const navigate=useNavigation();
  const user = useSelector((state) => {
    return state.user.userinfo;
  });
  return (
    <SafeAreaView
      style={{
        flexGrow: 1,
        backgroundColor: "#FF5864",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <TouchableOpacity
      onPress={()=>{
        navigate.goBack();
      }}
        style={{
          position: "absolute",
          zIndex: 2,
          top: 50,
          left: 20,
          backgroundColor: "white",
          padding: 10,
          borderRadius: 50,
        }}
      >
        <Icon
          type="ionicon"
          name="arrow-back-outline"
          color={"black"}
          size={25}
        />
      </TouchableOpacity>
      <Image
        source={{ uri: user?.url }}
        style={{ height: 200, width: 200, borderRadius: 200 }}
      />
      <Text style={{ fontSize: 20, fontWeight: "600", marginVertical: 20 }}>
        {" "}
        {`Hi ${user?.first_name} !`}
      </Text>
      <TouchableOpacity
        style={{ padding: 17, backgroundColor: "white", borderRadius: 10 }}
        onPress={()=>{
            dispatch(signin(null));
        }}
      >
        <Text style={{ color: "black", fontSize: 20, fontWeight: "bold" }}>
          Sign out
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Signput;
