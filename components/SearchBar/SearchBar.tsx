import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";

type Props = {};

const SearchBar = (props: Props) => {
  return (
    <View>
      <TextInput placeholder="Search..." />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  inputStyles: {
    height: 40,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
  },
});
