import React, { useEffect, useMemo, useState } from "react";
import { Alert, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Title from "../components/ui/Title";
import generateRandomNum from "../utils/generateRandomNum";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ userNum, onGameOver }) => {
  //   const initialGuess = useMemo(
  //     () => generateRandomNum(1, 100, userNum),
  //     [userNum]
  //   );

  const initialGuess = generateRandomNum(1, 100, userNum);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if (currentGuess === userNum) {
      onGameOver();
    }
  }, [currentGuess, userNum, onGameOver]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < userNum) ||
      (direction === "higher" && currentGuess > userNum)
    ) {
      Alert.alert("Sorry There");
      return;
    }

    if (direction == "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomNum(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
  };

  return (
    <SafeAreaView style={styles.screen}>
      <Title>Guess: </Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text style={styles.text}>Higher or Lower ?</Text>
        <View style={styles.buttonWrapper}>
          <PrimaryButton onPress={() => nextGuessHandler("higher")}>
            +
          </PrimaryButton>
          <PrimaryButton onPress={() => nextGuessHandler("lower")}>
            -
          </PrimaryButton>
        </View>
      </View>
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
  text: {
    fontSize: 30,
    color: "white",
    textAlign: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 34,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  buttonWrapper: {
    gap: 10,
    flexDirection: "row",
    alignItems: "center",
  },
});
