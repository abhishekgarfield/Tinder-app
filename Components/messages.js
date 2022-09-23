import { Text, View } from "react-native";
import { useSelector } from "react-redux";
const Messages = ({ selecteduser }) => {
  const user = useSelector((state) => {
    return state.user.userinfo;
  });
  return (
    <View style={{ flexGrow: 1 }}>
      <Text>{selecteduser.first_name}</Text>
      <Text>{user.first_name}</Text>
    </View>
  );
};

export default Messages;
