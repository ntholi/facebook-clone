import { StyleSheet, Text, View } from "react-native";
import React from "react";
import PostItem from "./PostItem";

export default function Posts({ postList }) {
  return (
    <View style={styles.posts}>
      {postList.map((it) => (
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
