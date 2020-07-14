import { StyleSheet, Dimensions } from "react-native";

const styles = {
  login: StyleSheet.create({
    inputContainer: {},
    input: {
      backgroundColor: "white",
      padding: 10,
      borderRadius: 10,
      margin: 5,
      color: "#383e56",
    },
    buttonContainer: {
      backgroundColor: "#1a237e",
      padding: 10,
      margin: 5,
      borderRadius: 10,
      alignItems: "center",
      // width: Dimensions.get("window").width/2,
      // alignSelf:'center'
    },
  }),
  postBox: StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      marginBottom: 40,
    },
    postText: {
      flex: 1,
      paddingLeft: 5,
      backgroundColor: "white",
    },
    postSave: {
      flex: 1,
      backgroundColor: "white",
      justifyContent: "center",
      alignItems: "flex-end",
    },
    postID: {
      backgroundColor: "#1e88e5",
      flexDirection: "row",
      padding: 5,
      justifyContent: "space-between",
    },
  }),
};
export default styles;
