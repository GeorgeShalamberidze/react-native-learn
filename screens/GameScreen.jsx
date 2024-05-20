import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Title from "../components/ui/Title";

const GameScreen = ({ userNum }) => {
  const initialGuess = generateRandomNum(1, 100, userNum);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  return (
    <SafeAreaView style={styles.screen}>
      <Title text={"Guess: "} />
      <Text>Higher or Lower ?</Text>
      <View>
        <Text>Log</Text>
      </View>
    </SafeAreaView>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    padding: 24,
  },
  title: {
    fontSize: 34,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
});
