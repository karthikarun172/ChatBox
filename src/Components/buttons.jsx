/** @format */

import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { Buttonstyles as styles } from "../StyleSheet/buttonStyles";
import { handleData } from "../Utils/Icons";

export function BoxRedBtn({ label, onPress, width }) {
  return (
    <TouchableOpacity
      style={{ width: `${width}%`, ...styles.BoxRedBtn }}
      onPress={onPress}
    >
      <Text style={styles.BoxRedBtnText}>{label}</Text>
    </TouchableOpacity>
  );
}

export function CircularRedBtn({ onPress, icon }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.circularRedBtn}>
      {handleData(icon)}
    </TouchableOpacity>
  );
}
