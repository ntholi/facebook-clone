import { StyleSheet, Text, View } from "react-native";
import React from "react";
import PostItem from "./PostItem";

export default function Posts() {
  return (
    <View style={styles.posts}>
      <PostItem
        author="Thabo Lebese"
        content="kljasdf aslkja sdflk dkdiwo sidfokw nwk8wjwokw kwikwi wi wi"
      />
      <PostItem
        author="Lineo Raputsoe"
        content="I went to the beach today"
        imageSrc="https://picsum.photos/200/300"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  posts: {
    padding: 16,
  },
});
