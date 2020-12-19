/** @format */

import React from "react";
import { FlatList, Text, View, Dimensions } from "react-native";
import { CircularRedBtn } from "../Components/buttons";
import { ChatCard } from "../Components/Cards";
import { Colors } from "../Utils/Colors";
import { Dummydatas } from "../Utils/DummyDatas";

const { height, width } = Dimensions.get("window");

const Chats = () => {
  return (
    <View style={{ flex: 1, backgroundColor: Colors.lightRed }}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={Dummydatas}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return <ChatCard name={item.name} chats={item.chats} />;
        }}
      />
      <View
        style={{
          position: "absolute",
          alignSelf: "flex-end",
          top: height - 250,
          right: 20,
        }}
      >
        <CircularRedBtn icon="burger" />
      </View>
    </View>
  );
};

export default Chats;
