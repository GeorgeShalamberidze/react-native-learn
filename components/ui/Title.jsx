import React from "react";
import { StyleSheet, Text } from "react-native";

const Title = ({ text }) => {
  return <Text style={styles.title}>{text} </Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 34,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
});
