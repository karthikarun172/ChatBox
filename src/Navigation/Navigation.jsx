/** @format */

import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Chats from "../Screens/chats.jsx";
import Status from "../Screens/status";
import Call from "../Screens/call";
import { Colors } from "../Utils/Colors";
import { Fontisto } from "@expo/vector-icons";

const Tab = createMaterialTopTabNavigator();

const Navigations = () => {
  return (
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
      <Tab.Screen name="call" component={Call} />
    </Tab.Navigator>
  );
};

export default Navigations;
