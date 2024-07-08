import React from "react";
import { StyleSheet, Text } from "react-native";

const Title = ({ children, textColor = "white" }) => {
  return <Text style={[styles.title, { color: textColor }]}>{children} </Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 34,
    textAlign: "center",
  },
});
