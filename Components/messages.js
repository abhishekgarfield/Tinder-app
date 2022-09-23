import { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { useSelector } from "react-redux";
const Messages = ({ selecteduser }) => {
  const user = useSelector((state) => {
    return state.user.userinfo;
  });
  const [userMessages, setMessages] = useState(null);
  const [selecteduserMessages, setselectedMessages] = useState(null);

  const getcurrentuserMessages = () => {
    const url = `http://localhost:8000/messages?currentuserid=${user.user_id}&selecteduserid=${selecteduser.user_id}`;
    fetch(url, { method: "Get" })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setMessages(data);
      });
  };
  const getselecteduserMessages = () => {
    const url = `http://localhost:8000/messages?currentuserid=${selecteduser.user_id}&selecteduserid=${user.user_id}`;
    fetch(url, { method: "Get" })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setselectedMessages(data);
      });
  };

  const filteredMessages = [];
  userMessages?.forEach((item) => {
    const temp = {};
    temp.url = user.url;
    temp.name = user.first_name;
    temp.time = item.timestamp;
    temp.message = item.message;
    filteredMessages.push(temp);
  });
  selecteduserMessages?.forEach((item) => {
    const temp = {};
    temp.url = selecteduser.url;
    temp.name = selecteduser.first_name;
    temp.time = item.timestamp;
    temp.message = item.message;
    filteredMessages.push(temp);
  });
  console.log(filteredMessages ? filteredMessages : "messages dont exist");
  const finalMessages = filteredMessages?.sort((a, b) =>
    a.timestamp?.localeCompare(b.timestamp)
  );
  useEffect(() => {
    getcurrentuserMessages(), getselecteduserMessages();
  }, []);
  return (
    <View style={{ flexGrow: 1, paddingHorizontal: 10 }}>
      {finalMessages?.map((item, index) => {
        return (
          <View
            key={index}
            style={
              item.name == user.first_name
                ? {
                    backgroundColor: "#FF5864",
                    flexDirection: "row-reverse",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    marginVertical: 10,
                  }
                : {
                    backgroundColor: "purple",
                    flexDirection: "row",
                    alignItems: "center",
                  }
            }
          >
            <Image
              source={{ uri: item.url }}
              style={{ height: 60, width: 60, borderRadius: 50 }}
            />
            <Text>{item.message}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default Messages;
