/** @format */

import React, { Component } from "react";
import { View, Text } from "react-native";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { Colors } from "../Utils/Colors";
import { HeaderStyles as styles } from "../StyleSheet/headerStyles";

const Header = ({ onPressSearch, onPressMenu }) => {
  return (
    <View style={styles.HeaderCont}>
      <Text style={styles.HeaderText}>Chatbox</Text>
      <View style={styles.HeaderIcons}>
        <AntDesign
          onPress={onPressSearch}
          name="search1"
          size={24}
          color={Colors.darkRed}
        />
        <MaterialCommunityIcons
          onPress={onPressMenu}
          name="menu"
          size={24}
          color={Colors.darkRed}
        />
      </View>
    </View>
  );
};

export default Header;
