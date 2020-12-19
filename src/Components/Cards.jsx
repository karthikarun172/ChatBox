/** @format */

import React from "react";
import { Colors } from "../Utils/Colors";
import { Text, View, TouchableOpacity } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { styles } from "../StyleSheet/CardStyles";

export function ChatCard({ image, name, chats, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.ChatcardCont}>
        <View style={styles.image}>
          <Text style={styles.img}></Text>
        </View>
        <View style={styles.datas}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.chats}> {chats}</Text>
        </View>
      </View>
      <View style={styles.line} />
    </TouchableOpacity>
  );
}

export function StatusCard({ name, onPress }) {
  return (
    <View style={styles.StatusCardCont}>
      <TouchableOpacity
        style={styles.StatusCard}
        onPress={onPress}
      ></TouchableOpacity>
      <Text style={styles.StatusCardText}>{name}</Text>
    </View>
  );
}

export function CallCard({ name, dialed, date, onPress }) {
  return (
    <View>
      <View style={styles.callCardCont}>
        <View style={styles.CallCardImg}></View>
        <View style={styles.CallCardDatas}>
          <Text style={styles.CallCardDatasText1}>{name}</Text>
          <Text style={styles.CallCardDatasText2}>{date}</Text>
          <Text style={styles.CallCardDatasText3}>{dialed}</Text>
        </View>
        <View style={styles.callCardCall}>
          <TouchableOpacity onPress={onPress} style={styles.callIcon}>
            <Ionicons
              name="ios-call"
              size={23}
              color={Colors.lightBlue}
              style={{
                top: 8,
                alignSelf: "center",
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.line}></View>
    </View>
  );
}

export function ChatWallCard({ text }) {
  return (
    <View style={styles.ChatWallCartCont}>
      <View style={styles.ChatWallImg}></View>
      <View style={styles.ChatWallTextCont}>
        <Text style={styles.ChatWallText}>{text}</Text>
      </View>
    </View>
  );
}

export function ChatWallSendMessage({ text }) {
  return (
    <View style={styles.ChatWallCartCont1}>
      <View style={styles.ChatWallTextCont1}>
        <Text style={styles.ChatWallText1}>{text}</Text>
      </View>
      <View style={styles.ChatWallImg1}></View>
    </View>
  );
}

export function SelectContactCart({ name }) {
  return (
    <View style={styles.SelectContactCartCont}>
      <View style={styles.SelectContactImg}></View>
      <Text style={styles.SelectContactText}>{name}</Text>
    </View>
  );
}
