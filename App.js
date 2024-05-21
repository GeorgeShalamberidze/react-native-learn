import { StatusBar } from "expo-status-bar";
import { Image, ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import StartGame from "./screens/StartGame";
import { LinearGradient } from "expo-linear-gradient";
import { useCallback, useEffect, useState } from "react";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [number, setNumber] = useState(null);
  const [gameIsOver, setGameIsOver] = useState(false);

  const [fontsLoaded, fontError] = Font.useFonts({
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) return null;

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
    <LinearGradient
      onLayout={onLayoutRootView}
      colors={["black", "gray"]}
      style={styles.appContainer}
    >
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
