/** @format */

import React, { useContext } from "react";
import { Text, View } from "react-native";
import { Input } from "../Components/inputs";
import { Colors } from "../Utils/Colors";
import { Ionicons } from "@expo/vector-icons";
import { AllLoggingStyles as styles } from "../StyleSheet/loggingStyles";
import { BoxRedBtn } from "../Components/buttons";
import Axios from "axios";
import { useState } from "react";
import { Context as RegisterContext } from "../Context/register";

const Otp = ({ navigation }) => {
  const [passcode, Setpasscode] = useState("");
  const { verify } = useContext(RegisterContext);

  return (
    <View style={styles.otpCont}>
      <View style={{ top: 100 }}>
        <Text style={styles.otpHeadingText1}>
          Waiting to automatically detect an OTP sent to
        </Text>
        <View style={styles.otpHeadingText2Cont}>
          <Text style={styles.otpHeadingText2}>9994878943</Text>
          <Text
            onPress={() => navigation.navigate("login")}
            style={styles.otpHeadingText3}
          >
            Wrong Number ?
          </Text>
        </View>
      </View>
      <View>
        <Input width={40} onChange={(passcode) => Setpasscode(passcode)} />
        <Text style={styles.otpIpText}>Enter 6-digit otp</Text>
      </View>
      <View style={styles.otpCont3}>
        <View style={styles.otpCont3_of_1}>
          <Text style={styles.otpContText1}>Resend</Text>
          <Text style={styles.otpContText2}>2:30</Text>
        </View>
        <View style={styles.otpCont3_of_2}>
          <Text style={styles.otpText3}>Call</Text>
          <Ionicons name="ios-call" size={24} color={Colors.lightBlue} />
        </View>
        <View style={{ alignItems: "center", marginTop: 20 }}>
          <BoxRedBtn label="Next" width={40} onPress={() => verify(passcode)} />
        </View>
      </View>
    </View>
  );
};

export default Otp;
