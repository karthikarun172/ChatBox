/** @format */

import { StyleSheet } from "react-native";
import { Colors } from "../Utils/Colors";

export const HeaderStyles = StyleSheet.create({
  HeaderCont: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 40,
    marginBottom: 25,
  },
  HeaderText: {
    color: Colors.darkRed,
    marginLeft: 15,
    fontWeight: "bold",
    fontSize: 24,
  },
  HeaderIcons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "30%",
    alignSelf: "center",
  },
});
