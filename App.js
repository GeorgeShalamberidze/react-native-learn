import { StatusBar } from "expo-status-bar";
import { Image, ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import StartGame from "./screens/StartGame";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";

export default function App() {
  const [number, setNumber] = useState(null);

  const pickedNumber = (num) => {
    setNumber(num);
  };

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
          {!number ? <StartGame pickedNumber={pickedNumber} /> : <GameScreen />}
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
