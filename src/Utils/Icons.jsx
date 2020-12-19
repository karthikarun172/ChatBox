/** @format */

import React from "react";
import {
  MaterialCommunityIcons,
  FontAwesome,
  Ionicons,
} from "@expo/vector-icons";
import { Colors } from "./Colors";

export function handleData(icons) {
  if (icons === "burger") {
    return (
      <MaterialCommunityIcons
        name="hamburger"
        size={30}
        color={Colors.lightRed}
        style={{ alignSelf: "center", top: 25 }}
      />
    );
  } else if (icons === "camera") {
    return (
      <FontAwesome
        name="camera-retro"
        size={30}
        color={Colors.lightRed}
        style={{ alignSelf: "center", top: 25 }}
      />
    );
  } else if (icons === "call") {
    return (
      <Ionicons
        name="ios-call"
        size={30}
        color={Colors.lightBlue}
        style={{ alignSelf: "center", top: 25 }}
      />
    );
  } else if (icons === "pen") {
    return (
      <FontAwesome
        name="pencil"
        size={24}
        color={Colors.lightRed}
        style={{ alignSelf: "center", top: 25 }}
      />
    );
  } else {
    return null;
  }
}
