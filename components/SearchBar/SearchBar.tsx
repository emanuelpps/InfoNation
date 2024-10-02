import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";

type Props = {};

const SearchBar = (props: Props) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputTitle}>Type to search</Text>
      <TextInput
        placeholder="Search..."
        placeholderTextColor={"white"}
        style={styles.inputStyles}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 20,
  },
  inputTitle: {
    fontSize: 20,
    marginTop: 20,
    fontWeight: "bold",
    color: "white",
  },
  inputStyles: {
    height: 40,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "white",
    padding: 5,
    width: 300,
    maxWidth: 300,
    marginTop: 20,
  },
});
