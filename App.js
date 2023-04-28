import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Pressable,
} from "react-native";
import Header from "./components/Header";
import Posts from "./components/Posts";
import { useState } from "react";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <Header />
      <Posts />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
});
