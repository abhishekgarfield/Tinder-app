import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";
const Messages = ({ selecteduser }) => {
  const user = useSelector((state) => {
    return state.user.userinfo;
  });
  const [Messages, setMessages] = useState(null);

  const getMessages = () => {
    const url = `http://localhost:8000/messages?currentuserid=${user.user_id}&selecteduserid=${selecteduser.user_id}`;
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  };
  useEffect(() => {
    getMessages();
  }, []);
  return (
    <View style={{ flexGrow: 1 }}>
      <Text>{selecteduser.first_name}</Text>
      <Text>{user.first_name}</Text>
    </View>
  );
};

export default Messages;
