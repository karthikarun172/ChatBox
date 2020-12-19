/** @format */

import React from "react";
import { Text, View } from "react-native";
import { BoxRedBtn } from "../Components/buttons";
import { Input } from "../Components/inputs";
import { Colors } from "../Utils/Colors";
import { AllLoggingStyles as styles } from "../StyleSheet/loggingStyles";

const Login = ({ navigation }) => {
  return (
    <View style={styles.LoginCont}>
      <Text style={styles.LoginText}>Verify your phone number</Text>
      <View style={styles.LoginIpCont}>
        <Input placeholder="+91" width={17} />
        <Input placeholder="Phone Number" width={60} />
      </View>
      <View style={styles.LoginBtnCont}>
        <BoxRedBtn
          label="Next"
          width={50}
          onPress={() => navigation.navigate("otp")}
        />
      </View>
    </View>
  );
};

export default Login;
