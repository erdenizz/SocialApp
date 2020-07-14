import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import styles from "../styles";
import auth from "@react-native-firebase/auth";
import AsyncStorage from "@react-native-community/async-storage";

const LoginPage = (props) => {
  const [usermail, setUserMail] = useState("");
  const [userpass, setPassword] = useState("");
  const [username, setUser] = useState("");

  const setMail = (text) => setUserMail(text);

  const setPass = (text) => setPassword(text);

  const loginUser = async () => {
    try {
      if (usermail && userpass === null) {
        throw error;
      } else {
        await auth().signInWithEmailAndPassword(usermail, userpass);
        AsyncStorage.setItem("@USER_ID", auth().currentUser.uid);

        props.navigation.navigate("Main");
      }
    } catch (error) {
      console.log(error);
      Alert.alert("Error", "Email veya Şifreyi kontrol ediniz.");
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#1e88e5" }}>
      <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <TextInput
          style={styles.login.input}
          placeholder="E-posta giriniz"
          placeholderTextColor="#383e56"
          onChangeText={setMail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.login.input}
          placeholder="Şifrenizi giriniz"
          placeholderTextColor="#383e56"
          onChangeText={setPass}
          secureTextEntry
        />
      </View>
      <View style={{}}>
        <TouchableOpacity
          style={styles.login.buttonContainer}
          onPress={loginUser}
        >
          <Text style={{ fontWeight: "bold", color: "white" }}>Giriş Yap</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.login.buttonContainer}
          onPress={() => props.navigation.navigate("Sing")}
        >
          <Text style={{ fontWeight: "bold", color: "white" }}>Kayıt Ol</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export { LoginPage };
