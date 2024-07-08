import React, { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  TextInput,
  useWindowDimensions,
  View,
} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";

const StartGame = ({ pickedNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  const { height, width } = useWindowDimensions();

  const numberInputHandler = (enteredNum) => {
    setEnteredNumber(enteredNum);
  };

  const confirmInputHandler = () => {
    const num = parseInt(enteredNumber);

    if (isNaN(num) || num <= 0 || num > 99) {
      Alert.alert("Invalid Number", "Number has to be  < 1 || > 99", [
        { text: "Okay", style: "default", onPress: () => setEnteredNumber("") },
      ]);
    }
    pickedNumber(num);
  };

  const marginTop = height <= 493 ? 120 : 50;

  return (
    <ScrollView>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.inputContainer, { marginTop }]}>
          <Title>Hey</Title>
          <TextInput
            style={styles.textInput}
            maxLength={2}
            keyboardAppearance="dark"
            keyboardType="number-pad"
            autoCapitalize="none"
            autoCorrect={false}
            value={enteredNumber}
            onChangeText={numberInputHandler}
          />
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => setEnteredNumber("")}>
              Reset
            </PrimaryButton>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default StartGame;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  inputContainer: {
    padding: 16,
    marginHorizontal: 24,
    borderRadius: 10,
    backgroundColor: "#7fc2af",
    elevation: 19, // Android specific
    shadowColor: "black",
    shadowOpacity: 1,
    shadowOffset: { height: 1, width: 1 },
  },
  textInput: {
    height: 50,
    fontSize: 32,
    borderBottomColor: "lightgray",
    borderBottomWidth: 1,
    color: "black",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
