import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  LoginPage,
  SignupPage,
  PostPage,
  LikesPage,
  SplashScreen,
} from "./pages";

import Provider from "./context/Provider";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Main() {
  return (
    <Tab.Navigator initialRouteName="Post">
      <Tab.Screen name="Post" component={PostPage} />
      <Tab.Screen name="Likes" component={LikesPage} />
    </Tab.Navigator>
  );
}

function Router() {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={LoginPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Sing"
            component={SignupPage}
            options={{ title: "Login" }}
          />
          <Stack.Screen
            name="Main"
            component={Main}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default Router;
