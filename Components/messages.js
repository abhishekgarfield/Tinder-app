import { useEffect, useState } from "react";
import {
  Image,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  FlatList,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useSelector } from "react-redux";
const Messages = ({ selecteduser }) => {
  const [message, setMessage] = useState(null);
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
  const handleSubmit = () => {
    console.log("adding message")
    const temp = {};
    temp.to_userId = selecteduser.user_id;
    temp.from_userId = user.user_id;
    temp.timestamp = new Date().toISOString();
    temp.message = message;
    console.log(temp);
    const url = "http://localhost:8000/addmessage";
    fetch(url, {
      headers: { "Content-Type": "application/json" },
      method: "Put",
      body: JSON.stringify(temp),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setMessage(null);
        getcurrentuserMessages(), getselecteduserMessages();
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
    temp.message = item.message.trim();
    filteredMessages.push(temp);
  });

  const finalmessages=filteredMessages?.sort((a, b) =>
    a.time?.localeCompare(b.time)
  );
  console.log(finalmessages);
  useEffect(() => {
    getcurrentuserMessages(), getselecteduserMessages();
  }, []);
  return (
    <KeyboardAvoidingView behavior={Platform.OS=="ios"?"padding":"height"}style={{flexGrow:1,flexDirection:"column"}}
    keyboardVerticalOffset={Platform.OS=="ios"?2:0}>
      <View style={{ flexGrow: 2, paddingHorizontal: 10, flexBasis: 20, }}>
        <FlatList
          data={finalmessages}
          showsVerticalScrollIndicator={false}
          style={{ marginVertical: 10 }}
          renderItem={({ item }) => {
            return (
              <View
                style={
                  item.name == user.first_name
                    ? {
                        flexDirection: "row-reverse",
                        alignItems: "center",
                        marginVertical: 5,
                      }
                    : {
                        flexDirection: "row",
                        alignItems: "center",
                        marginVertical: 5,
                      }
                }
              >
                <Image
                  source={{ uri: item.url }}
                  style={{ height: 60, width: 60, borderRadius: 50 }}
                />
                <View
                  style={
                    item.name == user.first_name
                      ? {
                          backgroundColor: "#FF5864",
                          marginRight: 7,
                          padding: 10,
                          borderRadius: 5,
                        }
                      : {
                          backgroundColor: "#A689E1",
                          marginLeft: 7,
                          padding: 10,
                          borderRadius: 5,
                        }
                  }
                >
                  <Text style={{ fontSize: 17 }}>{item.message}</Text>
                </View>
              </View>
            );
          }}
        />
        {/*finalMessages?.map((item, index) => {
          return (
            <View
              key={index}
              style={
                item.name == user.first_name
                  ? {
                      flexDirection: "row-reverse",
                      alignItems: "center",
                      marginVertical: 10,
                    }
                  : {
                      flexDirection: "row",
                      alignItems: "center",
                    }
              }
            >
              <Image
                source={{ uri: item.url }}
                style={{ height: 60, width: 60, borderRadius: 50 }}
              />
              <View
                style={
                  item.name == user.first_name
                    ? {
                        backgroundColor: "#FF5864",
                        marginRight: 7,
                        padding: 10,
                        borderRadius: 5,
                      }
                    : {
                        backgroundColor: "#A689E1",
                        marginLeft: 7,
                        padding: 10,
                        borderRadius: 5,
                      }
                }
              >
                <Text style={{ fontSize: 17 }}>{item.message}</Text>
              </View>
            </View>
          );
        })*/}
      </View>
      <SafeAreaView
        style={{
          flexDirection: "row",
          backgroundColor: "lightgrey",
          marginHorizontal: 20,
          alignItems: "flex-end",
          borderRadius: 10,
          justifyContent:"flex-end",
          flexGrow: 0,
        }}
      >
        <TextInput
          placeholder="Type your message"
          defaultValue={message}
          onChangeText={(newText) => {
            setMessage(newText);
          }}
          style={{
            padding: 20,
            flexGrow: 1,
            flexBasis: 20,
            fontSize: 20,
            borderRadius: 10,
          }}
        />
        <TouchableOpacity
          style={{ color: "#FF5864", padding: 20, borderRadius: 10 }}
          onPress={()=>{handleSubmit();Keyboard.dismiss()}
          }
        >
          <Text style={{ color: "#FF5864", fontWeight: "700", fontSize: 20 }}>
            Send
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default Messages;
