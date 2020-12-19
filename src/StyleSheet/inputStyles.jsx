/** @format */

import { StyleSheet } from "react-native";
import { Colors } from "../Utils/Colors";

export const InputStyles = StyleSheet.create({
  phoneText: {
    borderBottomWidth: 3,
    borderBottomColor: Colors.lightBlue,
    paddingLeft: 10,
    paddingBottom: 7,
    fontSize: 23,
    alignSelf: "center",
    marginTop: 120,
    color: Colors.darkRed,
  },
  ChatText: {
    backgroundColor: "lightgrey",
    width: "80%",
    borderRadius: 10,
    height: 50,
    paddingLeft: 20,
  },
});
