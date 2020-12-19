/** @format */

import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "../Utils/Colors";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  ChatcardCont: {
    flexDirection: "row",
    width: "100%",
    marginLeft: 35,
  },
  image: {
    height: 70,
    width: 70,
    backgroundColor: "white",
    borderRadius: 100,
  },
  datas: {
    flexDirection: "column",
    marginLeft: 10,
    width: width / 2,
    alignSelf: "center",
  },
  name: {
    fontSize: 23,
    color: "#949CDF",
  },
  chats: {
    color: "#CD5D7D",
    fontSize: 15,
  },
  line: {
    borderWidth: 0.4,
    width: 80,
    borderColor: "#949CDF",
    right: 45,
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 30,
  },
  StatusCardCont: {
    width: 71,
    margin: 25,
    left: 20,
  },
  StatusCard: {
    height: 71,
    width: 71,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "#CD5D7D",
    backgroundColor: "#FFFFFF",
    elevation: 10,
  },
  StatusCardText: {
    color: "#949CDF",
    textAlign: "center",
    fontSize: 15,
  },
  callCardCont: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  CallCardImg: {
    height: 70,
    width: 70,
    borderRadius: 100,
    backgroundColor: Colors.white,
  },
  CallCardDatasText1: {
    color: Colors.darkBlue,
    fontSize: 20,
  },
  CallCardDatasText2: {
    color: Colors.darkRed,
    fontSize: 15,
  },
  CallCardDatasText3: {
    fontSize: 11,
    color: Colors.darkBlue,
  },
  CallCardDatas: {
    alignSelf: "center",

    width: "45%",
  },
  callCardCall: {
    alignSelf: "center",
  },
  callIcon: {
    height: 40,
    width: 40,
    borderRadius: 100,
    backgroundColor: Colors.white,
    elevation: 8,
  },
  line: {
    borderWidth: 0.4,
    borderColor: Colors.darkBlue,
    width: 100,
    marginBottom: 20,
    marginTop: 20,
    alignSelf: "center",
  },
  ChatWallCartCont: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 30,
  },
  ChatWallImg: {
    height: 40,
    width: 40,
    borderRadius: 100,
    backgroundColor: Colors.darkRed,
    marginLeft: 10,
    // marginRight: 10,
  },
  ChatWallTextCont: {
    width: width / 2,
    backgroundColor: Colors.white,
    borderRadius: 10,
    top: 15,
    borderTopLeftRadius: 30,
  },
  ChatWallText: {
    padding: 10,
    color: "grey",
    fontSize: 15,
  },
  ChatWallCartCont1: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 30,
  },
  ChatWallImg1: {
    height: 40,
    width: 40,
    borderRadius: 100,
    backgroundColor: Colors.darkRed,
    marginRight: 10,
  },
  ChatWallTextCont1: {
    width: width / 2,
    backgroundColor: Colors.white,
    borderRadius: 10,
    top: 15,
    borderTopRightRadius: 30,
  },
  ChatWallText1: {
    padding: 10,
    color: "grey",
    fontSize: 15,
  },
  SelectContactCartCont: {
    flexDirection: "row",
    marginTop: 20,
    left: width / 5,
  },
  SelectContactImg: {
    height: 50,
    width: 50,
    borderRadius: 100,
    backgroundColor: Colors.darkRed,
  },
  SelectContactText: {
    alignSelf: "center",
    marginLeft: 20,
    fontSize: 17,
    color: Colors.darkBlue,
  },
});
