/** @format */

import React from "react";
import { Text, View, StyleSheet, Dimensions, StatusBar } from "react-native";
import { FlatList } from "react-native";
import { ChatWallCard } from "../Components/Cards";
import { Colors } from "../Utils/Colors";
import { Dummydatas } from "../Utils/DummyDatas";
import { ChatWallSendMessage } from "../Components/Cards";
import { ChatInput } from "../Components/inputs";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");

const ChatWall = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.lightRed,
        height: height,
      }}
    >
      <View
        style={{
          height: 50,
          width: "100%",
        }}
      >
        <Text
          style={{
            flex: 1,
            justifyContent: "center",
            marginTop: 20,
            left: 20,
            fontWeight: "bold",
            fontSize: 20,
            color: Colors.darkRed,
          }}
        >
          Arun
        </Text>
      </View>
      <FlatList
        data={Dummydatas}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <View style={{ flex: 1 }}>
              <ChatWallCard text={item.chats} />
              <ChatWallSendMessage text={item.image} />
            </View>
          );
        }}
      />
      <View
        style={{
          justifyContent: "flex-end",
          flexDirection: "row",
        }}
      >
        <ChatInput />
        <TouchableOpacity
          style={{
            height: 50,
            width: 50,
            backgroundColor: Colors.darkRed,
            borderRadius: 100,
          }}
        >
          <Ionicons
            style={{ alignItems: "center", alignSelf: "center", top: 12 }}
            name="md-send"
            size={24}
            color={Colors.lightRed}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatWall;
