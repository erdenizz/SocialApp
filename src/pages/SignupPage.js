import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import auth from "@react-native-firebase/auth";

import styles from "../styles";
import database from "@react-native-firebase/database";

const SignupPage = (props) => {
  const [usermail, setUserMail] = useState("");
  const [userpass, setPassword] = useState("");
  const [userpassRep, setPasswordRep] = useState("");
  const [nick, setNick] = useState("");

  const setUserName = (text) => setNick(text);
  const setMail = (text) => setUserMail(text);
  const setUserPass = (text) => setPassword(text);

  const singUser = async () => {
    try {
      if (usermail && userpass == null) {
        throw error;
      } else {
        await auth().createUserWithEmailAndPassword(usermail, userpass);
        await database().ref("user/").set({ username: nick });
        auth().currentUser.updateProfile({ displayName: nick });
        Alert.alert("Hesap oluşturma başarılı");
        props.navigation.goBack();
      }
    } catch (error) {
      Alert.alert("rsdsdssalert" + error);
      console.log(error);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#1e88e5" }}>
      <ScrollView style={{ flex: 1 }} bounces={false}>
        <View style={{ justifyContent: "center", marginTop: "90%" }}>
          <TextInput
            style={styles.login.input}
            placeholder="Nick giriniz"
            placeholderTextColor="#383e56"
            onChangeText={setUserName}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.login.input}
            placeholder="E-posta giriniz"
            placeholderTextColor="#383e56"
            onChangeText={setMail}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
            keyboardType="email-address"
          />
          <TextInput
            style={styles.login.input}
            placeholder="Şifrenizi giriniz"
            placeholderTextColor="#383e56"
            onChangeText={setUserPass}
            underlineColorAndroid="transparent"
            secureTextEntry
          />

          <TextInput
            style={styles.login.input}
            placeholder="Şifrenizi tekrar giriniz"
            placeholderTextColor="#383e56"
            onChangeText={(text) => setPasswordRep(text)}
            underlineColorAndroid="transparent"
            secureTextEntry
          />
        </View>
        <View>
          <TouchableOpacity
            style={styles.login.buttonContainer}
            onPress={singUser}
          >
            <Text style={{ fontWeight: "bold", color: "white" }}>
              {" "}
              Kayıt Ol{" "}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.login.buttonContainer}
            onPress={() => props.navigation.navigate("Login")}
          >
            <Text style={{ fontWeight: "bold", color: "white" }}> Vazgeç </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export { SignupPage };
