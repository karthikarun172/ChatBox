/** @format */

import React, { useContext, useState } from "react";
import { Text, View } from "react-native";
import { BoxRedBtn } from "../Components/buttons";
import { Input } from "../Components/inputs";
import { Colors } from "../Utils/Colors";
import { AllLoggingStyles as styles } from "../StyleSheet/loggingStyles";
import Axios from "axios";
import { Context as RegisterContext } from "../Context/register";

const Login = ({ navigation }) => {
  const { check } = useContext(RegisterContext);
  const [number, Setnumber] = useState("");

  const handleProcess = () => {
    check(number, navigation.navigate("otp"));
  };

  return (
    <View style={styles.LoginCont}>
      <Text style={styles.LoginText}>Verify your phone number</Text>
      <View style={styles.LoginIpCont}>
        <Input placeholder="+91" width={17} />
        <Input
          onChange={(number) => Setnumber(number)}
          placeholder="Phone Number"
          width={60}
        />
      </View>
      <View style={styles.LoginBtnCont}>
        <BoxRedBtn label="Next" width={50} onPress={() => handleProcess()} />
      </View>
    </View>
  );
};

export default Login;
