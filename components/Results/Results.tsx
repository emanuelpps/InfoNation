import { View, Text, StyleSheet } from "react-native";
import React from "react";
import CountryFlag from "./components/CountryFlag";
import CountryCard from "./components/CountryCard";

type Props = {};

const Results = (props: Props) => {
  return (
    <View style={styles.container}>
      <CountryCard />
    </View>
  );
};

export default Results;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#669bbc",
  },
});
