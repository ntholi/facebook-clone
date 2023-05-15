import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";

export default function PostItem({ author, content, imageSrc }) {
  const [likeCount, setLikeCount] = useState(0);

  function handleLike() {
    setLikeCount(likeCount + 1);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.author}>{author}</Text>
      <Text>{content}</Text>
      {imageSrc ? (
        <Image style={styles.image} source={{ uri: imageSrc }} />
      ) : null}
      <View style={styles.footer}>
        <TouchableOpacity onPress={handleLike}>
          <View style={styles.button}>
            <AntDesign
              name="like1"
              size={18}
              color={likeCount > 0 ? "#1877F2" : "#9E9E9E"}
            />
            <Text style={{ marginLeft: 5 }}>Like</Text>
          </View>
        </TouchableOpacity>
        <Text>{likeCount} Likes</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  author: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  container: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#aaa",
    marginBottom: 10,
  },
  image: {
    marginTop: 8,
    width: "100%",
    height: 250,
  },
  button: {
    flexDirection: "row",
  },
  footer: {
    borderTopColor: "#aaa",
    borderTopWidth: 1,
    marginTop: 15,
    padding: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
