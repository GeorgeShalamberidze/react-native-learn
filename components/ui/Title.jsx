import React from "react";
import { StyleSheet, Text } from "react-native";

const Title = ({ text }) => {
  return <Text style={styles.title}>{text} </Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 34,
    color: "white",
    textAlign: "center",
  },
});
