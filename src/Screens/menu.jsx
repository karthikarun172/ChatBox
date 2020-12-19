/** @format */

import React, { useState } from "react";
import { Text, View, Modal, Dimensions } from "react-native";
import { Colors, Theme } from "../Utils/Colors";

const { width, height } = Dimensions.get("window");

const Menu = () => {
  const [modals, SetModals] = useState(false);
  const [selected, SetSelected] = useState("");

  // const handleSelect = (name) => {
  //   if (name === "1") {
  //     const styles = {
  //       color: Colors.darkRed,
  //       fontWeight: "bold",
  //       fontSize: 20,
  //     }
  //     return styles;
  //   }else{
  //     const styles = {
  //       color:"grey"
  //     }
  //   }
  // };

  return (
    <View style={{ flex: 1, backgroundColor: Colors.darkRed }}>
      <Modal animationType="slide" transparent={true} visible={modals}>
        <View
          style={{
            height: 400,
            width: "80%",
            backgroundColor: Colors.lightRed,
            alignSelf: "center",
            top: height / 4,
            borderRadius: 20,
            elevation: 10,
            zIndex: 100,
          }}
        >
          <Text
            onPress={() => SetModals(false)}
            style={{
              zIndex: 100,
              alignItems: "flex-end",
              alignSelf: "flex-end",
              right: 20,
              top: 20,
              paddingTop: 5,
              paddingBottom: 5,
              paddingLeft: 20,
              paddingRight: 20,
              backgroundColor: Colors.darkRed,
              color: Colors.lightRed,
              borderRadius: 5,
              fontWeight: "bold",
            }}
          >
            Done
          </Text>
          <View
            style={{
              alignSelf: "center",
              flex: 1,
              justifyContent: "space-evenly",
            }}
          >
            <Text
              style={{
                color: "grey",
              }}
            >
              Kalakal Theme
            </Text>
            <Text style={{ color: "grey" }}>Meratal Theme</Text>
            <Text
              style={{
                color: Colors.darkRed,
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              Azagana Theme
            </Text>
            <Text style={{ color: "grey" }}>Veritanamana Theme</Text>
            <Text style={{ color: "grey" }}>vetti Theme</Text>
          </View>
        </View>
      </Modal>
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Text
          onPress={() => SetModals(true)}
          style={{
            color: Colors.lightRed,
            fontSize: 20,
            borderWidth: 2,
            padding: 15,
            borderColor: Colors.lightRed,
          }}
        >
          Select Theme
        </Text>
        <Text
          style={{
            color: Colors.lightRed,
            fontSize: 20,
            borderWidth: 2,
            padding: 15,
            borderColor: Colors.lightRed,
            marginTop: 20,
          }}
        >
          Log Out
        </Text>
      </View>
    </View>
  );
};

export default Menu;
