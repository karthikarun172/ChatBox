/** @format */

import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "../Utils/Colors";

const { width, height } = Dimensions.get("window");

export const AllLoggingStyles = StyleSheet.create({
  TermsCont: {
    flex: 1,
    backgroundColor: Colors.darkRed,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  TermsText: {
    color: Colors.lightRed,
    fontWeight: "bold",
    fontSize: 24,
    marginTop: 30,
    marginLeft: 20,
  },
  TermsBtn: {
    width: "100%",
    alignItems: "center",
    marginBottom: 50,
  },
  LoginCont: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  LoginText: {
    textAlign: "center",
    top: 70,
    color: Colors.darkRed,
    fontSize: 18,
    fontWeight: "bold",
  },
  LoginIpCont: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  LoginBtnCont: {
    alignItems: "center",
    marginTop: 50,
  },
  otpCont: { flex: 1, backgroundColor: Colors.white },
  otpHeadingText1: {
    textAlign: "center",
    color: Colors.darkBlue,
    fontSize: 15,
  },
  otpHeadingText2Cont: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 5,
  },
  otpHeadingText2: {
    color: Colors.darkBlue,
    right: 5,
    fontSize: 15,
  },
  otpHeadingText3: {
    color: Colors.darkRed,
    left: 5,
    fontSize: 15,
  },
  otpIpText: {
    textAlign: "center",
    marginTop: 15,
    color: Colors.darkBlue,
  },
  otpCont3: { marginTop: 50 },
  otpCont3_of_1: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  otpContText1: { color: Colors.darkBlue },
  otpContText2: { color: Colors.darkBlue },
  otpCont3_of_2: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 40,
  },
  otpText3: { color: Colors.darkBlue },
});
