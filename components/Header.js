import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Facebook</Text>
      <View style={styles.buttons}>
        <View style={[styles.roundButton, styles.blueButton]}>
          <Entypo name="message" size={24} color="#616161" />
        </View>
        <View style={[styles.roundButton, styles.yellowButton]}>
          <Entypo name="user" size={24} color="#616161" />
        </View>
        <View style={[styles.roundButton, styles.redButton]}>
          <Ionicons name="settings" size={24} color="#616161" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#aaa",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1877F2",
  },
  buttons: {
    flexDirection: "row",
    width: 130,
    justifyContent: "space-between",
  },
  roundButton: {
    width: 38,
    height: 38,
    borderRadius: 25,
    backgroundColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
  },
  yellowButton: {
    backgroundColor: "#FFF9C4",
  },
  blueButton: {
    backgroundColor: "#BBDEFB",
  },
  redButton: {
    backgroundColor: "#FFCDD2",
  },
});
