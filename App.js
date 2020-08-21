import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [count, setCount] = useState(0);
  const [outputText, setOutputText] = useState("Start Tracking");
  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <Button
        title="Start Tracking"
        onPress={() => setOutputText("Now Tracking")}
      />
      <Button title="Click Me!" onPress={() => setCount(count + 1)} />
      <Text>You have pressed {count} times.</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
