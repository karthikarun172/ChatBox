/** @format */

import React from "react";
import { FlatList, Text, View, Dimensions } from "react-native";
import { StatusCard } from "../Components/Cards";
import { Dummydatas } from "../Utils/DummyDatas";
import { Colors } from "../Utils/Colors";
import { CircularRedBtn } from "../Components/buttons";

const { height, width } = Dimensions.get("window");

const Status = () => {
  return (
    <View style={{ flex: 1, backgroundColor: Colors.lightRed }}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={Dummydatas}
        keyExtractor={(item) => item._id}
        numColumns={3}
        renderItem={({ item }) => {
          return <StatusCard name={item.name} />;
        }}
      />
      <View
        style={{
          position: "absolute",
          alignSelf: "flex-end",
          right: 20,
          top: height - 250,
        }}
      >
        <CircularRedBtn icon="camera" />
      </View>
    </View>
  );
};

export default Status;
