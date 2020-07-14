import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import styles from "../styles";

const PostPageItem = (props) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View styles={{ flex: 1 }}>
        <View style={styles.postBox.postID}>
          <View style={{ flexDirection: "row", alignContent: "flex-start" }}>
            <Image
              style={{ width: 20, height: 20 }}
              source={require("../assets/plane.png")}
            />
            <Text style={{ color: "white", paddingLeft: 10 }}>
              {props.data.username}
            </Text>
          </View>
          <Text style={{ color: "white" }}>{props.data.date}</Text>
        </View>
        <View style={styles.postBox.container}>
          <View style={styles.postBox.postText}>
            <Text>{props.data.info}</Text>
          </View>
          <View style={styles.postBox.postSave}>
            <TouchableOpacity onPress={props.onPostPressed}>
              <Image
                style={{ width: 20, height: 20 }}
                source={require("../assets/diskette.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export { PostPageItem };
