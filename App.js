/** @format */

import { StatusBar } from "expo-status-bar";
import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { BoxRedBtn, CircularRedBtn } from "./src/Components/buttons";
import {
  CallCard,
  ChatWallCard,
  ChatWallSendMessage,
  SelectContactCart,
} from "./src/Components/Cards";
import { ChatInput, Input } from "./src/Components/inputs";
import { Colors } from "./src/Utils/Colors";
import { NavigationContainer } from "@react-navigation/native";

import { Dummydatas } from "./src/Utils/DummyDatas";
import Header from "./src/Components/header";
import LoggingNav from "./src/Navigation/Navigation";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Header /> */}
      <NavigationContainer>
        <LoggingNav />
      </NavigationContainer>
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightRed,
  },
});
