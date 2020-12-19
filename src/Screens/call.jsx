/** @format */

import React from "react";
import { FlatList, Text, View } from "react-native";
import { CallCard } from "../Components/Cards";
import { Colors } from "../Utils/Colors";
import { Dummydatas } from "../Utils/DummyDatas";

const Call = () => {
  return (
    <View style={{ flex: 1, backgroundColor: Colors.lightRed }}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={Dummydatas}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <CallCard name={item.name} date="December 18" dialed="(Incoming)" />
          );
        }}
      />
    </View>
  );
};

export default Call;
