/** @format */

import { StyleSheet } from "react-native";
import { Colors } from "../Utils/Colors";

export const Buttonstyles = StyleSheet.create({
  BoxRedBtn: {
    backgroundColor: Colors.lightRed,
    borderRadius: 5,
  },
  BoxRedBtnText: {
    padding: 14,
    color: Colors.darkRed,
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
  circularRedBtn: {
    height: 80,
    width: 80,
    borderRadius: 100,
    backgroundColor: Colors.darkRed,
    elevation: 4,
  },
});
