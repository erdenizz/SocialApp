import React, { useContext, useState, useEffect } from "react";
import { View, FlatList } from "react-native";

import { LikesItem } from "../components";
import Context from "../context/store";
import database from "@react-native-firebase/database";

const LikesPage = (props) => {
  const { state, dispatch } = useContext(Context);
  const [list, setList] = useState([]);
  console.log("list");
  console.log(list);
  useEffect(() => {
    readFav();
  }, []);

  // Database a kaydetmeden fav list
  // function setFavList() {
  //   let myFavList = [...list];
  //   myFavList.push(state.favoritePost);
  //   setList(myFavList);
  //   console.log("My fav list array settedd");
  // }

  const readFav = () => {
    database()
      .ref("/Favs")
      .on("value", (snapshot) => {
        if (snapshot != null) setList(Object.values(snapshot.val()));
      });
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={list}
        renderItem={({ item }) => <LikesItem data={item} />}
      />
    </View>
  );
};

export { LikesPage };
