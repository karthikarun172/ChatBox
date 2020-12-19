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

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const Navigations = () => {
  const [logged, isLogged] = useState(false);
  return (
    <>
      {logged ? (
        <>
          <Header />
          <Tab.Navigator
            tabBarPosition="top"
            initialRouteName="chats"
            tabBarOptions={{
              showIcon: true,
              activeTintColor: Colors.darkRed,
              labelStyle: { fontSize: 12 },
              indicatorStyle: { backgroundColor: Colors.lightRed },
              tabStyle: { backgroundColor: Colors.lightRed },
              labelStyle: {
                fontWeight: "bold",
                textTransform: "capitalize",
                fontSize: 17,
              },
              style: {
                elevation: 0,
                shadowOpacity: 0,
              },
            }}
          >
            <Tab.Screen
              // options={{
              //   tabBarIcon: ({ color }) => (
              //     <Fontisto
              //       name="blood-drop"
              //       // style={{ rotation: 180 }}
              //       size={18}
              //       color={color}
              //     />
              //   ),
              // }}
              name="chats"
              component={Chats}
            />
            <Tab.Screen name="status" component={Status} />
            <Tab.Screen name="calls" component={Call} />
          </Tab.Navigator>
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
