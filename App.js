import {
  StatusBar,
  StyleSheet,
  TextInput,
  View,
  Text,
  Button,
} from "react-native";
import Header from "./components/Header";
import Posts from "./components/Posts";
import { useState } from "react";

export default function App() {
  const [text, setText] = useState("");

  function createPost() {
    console.log(text);
  }

  return (
    <View style={styles.container}>
      <StatusBar />
      <Header />
      <TextInput
        style={styles.textInput}
        multiline={true}
        value={text}
        onChangeText={setText}
        placeholder="What's on your mind?"
      />
      <View style={styles.buttonContainer}>
        <Button title="Post" onPress={createPost} />
      </View>
      <Posts />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
  textInput: {
    height: 80,
    margin: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: "#aaa",
    borderRadius: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginEnd: 15,
  },
});
