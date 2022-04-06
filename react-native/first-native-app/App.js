import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import NewF from "./components/NewF";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
      <NewF />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "whitesmoke",
    alignItems: "center",
    justifyContent: "center",
  },
});
