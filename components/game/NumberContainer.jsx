import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    padding: 24,
    margin: 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "white",
  },
  numberText: {
    fontSize: 36,
    fontWeight: "bold",
    color: "white",
  },
});
