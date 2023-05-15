import { StyleSheet, Text, View } from "react-native";
import React from "react";
import PostItem from "./PostItem";

const posts = [
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
export default function Posts() {
  return (
    <View style={styles.posts}>
      {posts.map((it) => (
        <PostItem
          author={it.author}
          content={it.content}
          imageSrc={it.imageSrc}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  posts: {
    padding: 16,
  },
});
