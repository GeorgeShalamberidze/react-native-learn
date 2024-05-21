import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const PrimaryButton = ({ children, onPress }) => {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => (pressed ? styles.pressed : null)}
      >
        <Text style={styles.text}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 28,
    paddingVertical: 8,
    paddingHorizontal: 16,
    shadowColor: "black",
    shadowOpacity: 2,
    shadowRadius: 1,
    shadowOffset: { height: 1, width: 1 },
    width: "50%",
  },
  text: {
    color: "black",
    fontSize: 20,
    textAlign: "center",
  },
  pressed: {
    opacity: 0.2,
  },
  notPressed: {
    opacity: 1,
  },
});
