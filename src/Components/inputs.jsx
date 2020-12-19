/** @format */

import React from "react";
import { TextInput, View } from "react-native";
import { InputStyles as styles } from "../StyleSheet/inputStyles";
import { Colors } from "../Utils/Colors";

export function Input({ placeholder, width }) {
  return (
    <TextInput
      keyboardType="numeric"
      placeholder={placeholder}
      placeholderTextColor={Colors.darkRed}
      textAlign="center"
      style={{ width: `${width}%`, ...styles.phoneText }}
    />
  );
}

export function ChatInput() {
  return <TextInput placeholder="Text Message..." style={styles.ChatText} />;
}
