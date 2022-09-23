import { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, Text, View, Image, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";

const Chat = () => {
  const user = useSelector((state) => {
    return state.user.userinfo;
  });
  const Matchedids = user.matches?.map(({ user_id }) => user_id);
  const [MatchedProfiles, setMatchedPrOFILES] = useState(null);
  const getmatchedUsers = () => {
    const url = `http://localhost:8000/matchedusers?users=${Matchedids}`;
    fetch(url, { method: "Get" })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setMatchedPrOFILES(data);
      });
  };
  const filteredMatchedProfile=MatchedProfiles?.filter((profile)=>{return profile.matches.some(({user_id})=>{return user_id==user.user_id})})
  console.log(filteredMatchedProfile)
  useEffect(() => {
    getmatchedUsers();
  }, []);
  return (
    <SafeAreaView style={{ }}>
      <ScrollView
        horizontal
        contentContainerStyle={{
          flexDirection: "column",
          justifyContent: "center",
          
          flexGrow:1
        }}
      >
        {filteredMatchedProfile?.map((item, index) => (
          <TouchableOpacity key={index} style={{ flexDirection: "row",padding:15, justifyContent:"flex-start",alignItems:"center",marginVertical:2,backgroundColor:"white"}}>
            <Image
              source={{ uri: item.url }}
              style={{ height: 70, width: 70, borderRadius: 50 }}
            />
            <View style={{ flexDirection: "column", flexGrow: 1,marginLeft:15 }}>
              <Text style={{fontSize:23,fontWeight:"600"}}>{item.first_name}</Text>
              <Text>Say hi !</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Chat;
