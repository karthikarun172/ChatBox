/** @format */

import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Chats from "../Screens/chats.jsx";
import Status from "../Screens/status";
import Call from "../Screens/call";
import { Colors } from "../Utils/Colors";
import { Fontisto } from "@expo/vector-icons";
import TermsAndConditions from "../Screens/Terms";
import Login from "../Screens/login";
import Otp from "../Screens/otp";
import { useState } from "react";
import Header from "../Components/header";
import ChatWall from "../Screens/chatWall";
import { StatusBar, View } from "react-native";
import { TabBaroptions } from "../Utils/tabBarOptions";
import Menu from "../Screens/menu";

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const TabNavigations = ({ navigation, route }) => {
  return (
    <View style={{ flex: 1, backgroundColor: Colors.lightRed }}>
      <Header onPressMenu={() => navigation.navigate("menu")} />
      <Tab.Navigator
        tabBarPosition="top"
        initialRouteName="chats"
        tabBarOptions={TabBaroptions}
      >
        <Tab.Screen name="chats" component={Chats} />
        <Tab.Screen name="status" component={Status} />
        <Tab.Screen name="calls" component={Call} />
      </Tab.Navigator>
    </View>
  );
};

const Navigations = () => {
  const [logged, isLogged] = useState(true);
  return (
    <>
      {logged ? (
        <>
          <Stack.Navigator headerMode="none" initialRouteName="chats">
            <Stack.Screen name="chats" children={TabNavigations} />
            <Stack.Screen name="chatwall" component={ChatWall} />
            <Stack.Screen name="menu" component={Menu} />
          </Stack.Navigator>
        </>
      ) : (
        <Stack.Navigator headerMode="none" initialRouteName="terms">
          <Stack.Screen name="terms" component={TermsAndConditions} />
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="otp" component={Otp} />
        </Stack.Navigator>
      )}
    </>
  );
};

export default Navigations;
