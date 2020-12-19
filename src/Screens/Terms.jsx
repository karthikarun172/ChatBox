/** @format */

import React from "react";
import { StatusBar, Text, View } from "react-native";
import { BoxRedBtn } from "../Components/buttons";
import { Colors } from "../Utils/Colors";
import { AllLoggingStyles as styles } from "../StyleSheet/loggingStyles";

const TermsAndConditions = ({ navigation }) => {
  return (
    <View style={styles.TermsCont}>
      <StatusBar />

      <Text style={styles.TermsText}>ChatBox</Text>
      <View style={styles.TermsBtn}>
        <BoxRedBtn
          label="Agree to Continue"
          width={80}
          onPress={() => navigation.navigate("login")}
        />
      </View>
    </View>
  );
};

export default TermsAndConditions;
