import { StatusBar } from "expo-status-bar";
import { Image, ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import StartGame from "./screens/StartGame";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [number, setNumber] = useState(null);
  const [gameIsOver, setGameIsOver] = useState(false);

  const pickedNumber = (num) => {
    setNumber(num);
  };

  const gameOverHandler = () => {
    setGameIsOver(true);
  };

  if (gameIsOver) {
    return <GameOverScreen />;
  }

  return (
    <LinearGradient colors={["black", "gray"]} style={styles.appContainer}>
      <ImageBackground
        resizeMode="cover"
        source={require("./assets/images/picone.jpg")}
        style={styles.appContainer}
        imageStyle={styles.bgImage}
      >
        <Image src="" />
        <SafeAreaView>
          {!number ? (
            <StartGame pickedNumber={pickedNumber} />
          ) : (
            <GameScreen userNum={number} onGameOver={gameOverHandler} />
          )}
        </SafeAreaView>
      </ImageBackground>
      <StatusBar style="auto" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  bgImage: {
    opacity: 0.8,
  },
});
