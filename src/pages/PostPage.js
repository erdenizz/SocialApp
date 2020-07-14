import React, { useState, useEffect, useContext } from "react";
import {
  Image,
  SafeAreaView,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import database from "@react-native-firebase/database";
import AsyncStorage from "@react-native-community/async-storage";

import Context from "../context/store";
import { PostPageItem } from "../components";
import auth from "@react-native-firebase/auth";
import { format, set, formatDistance, subDays, formatRelative } from "date-fns";
import { tr } from "date-fns/locale";

const PostPage = (props) => {
  const { state, dispatch } = useContext(Context);

  const [post, setPostText] = useState("");
  const [list, setList] = useState([]);
  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");

  useEffect(() => {
    addToList();
    getUserName();
  }, []);

  const getUserName = () => {
    const userName = auth().currentUser.displayName;
    setUser(userName);
  };

  const addToList = async () => {
    let data = await database();
    let post1 = data.ref(`/Mesaj/`).on("value", (snapshot) => {
      // console.log(snapshot)
      if (snapshot.val() != null) {
        let res2 = Object.values(snapshot.val());
        setList(res2);
      }
    });
  };

  const changeData = (text) => setPostText(text);

  // let postDate = formatRelative(subDays(new Date(), 0), new Date(), {
  //   locale: tr,
  // });
  let postDate = format(new Date(), " d/MMMM/yyyy H:mm", { locale: tr });

  const sendData = () => {
    database().ref("/Mesaj/").push({
      date: postDate,
      info: post,
      useremail: email,
      username: user,
    });
  };
  const renderPost = ({ item }) => {
    return <PostPageItem data={item} onPostPressed={() => likedPost(item)} />;
  };

  function likedPost(favPost) {
    dispatch({ type: "SET_FAVORITE_POST", favPost });
    database().ref("/Favs/").push(favPost);
    Alert.alert("Başarılı", "Mesajınız Başarıyla kaydedildi.");
    // props.navigation.navigate("Likes");
  }

  const signOut = () => {
    auth().signOut();
    AsyncStorage.removeItem("@USER_ID");
    props.navigation.navigate("Login");
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#eeeeee", flex: 1 }}>
      <FlatList
        keyExtractor={(_, index) => index.toString()}
        data={list}
        renderItem={renderPost}
      />
      <View
        style={{
          backgroundColor: "white",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={{}}>
          <TextInput
            placeholder="Ne düşünüyorsun ?"
            placeholderTextColor="black"
            onChangeText={changeData}
          />
        </View>
        <View style={{ justifyContent: "center" }}>
          <TouchableOpacity onPress={sendData}>
            <Image
              style={{ width: 30, height: 30 }}
              source={require("../assets/arrow.png")}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* <Button title="Çıkış Yap" onPress={signOut} /> */}
    </SafeAreaView>
  );
};

export { PostPage };
