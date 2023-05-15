import { StatusBar, StyleSheet, View } from "react-native";
import Header from "./components/Header";
import Posts from "./components/Posts";

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
