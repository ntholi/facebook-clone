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

const postData = [
  {
    author: "Thabo Lebese",
    content:
      "This is me posting about me and the things that me likes to do and make you see the thing that I post about",
  },
  {
    author: "David Lebese",
    content: "This is me on the photo bellow, like it pleaeeeeese!",
    imageSrc: "https://picsum.photos/200/300",
  },
];

export default function App() {
  const [text, setText] = useState("");
  const [posts, setPosts] = useState(postData);

  function createPost() {
    const newPost = {
      author: "Heqoa Skelekeqe",
      content: text,
    };
    setPosts([newPost, ...posts]);
    setText("");
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
      <Posts postList={posts} />
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
