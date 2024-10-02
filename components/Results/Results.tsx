import { View, StyleSheet } from "react-native";
import React from "react";
//import CountryCard from "./components/CountryData/CountryCard";
import CountryResults from "./components/CountryResults/CountryResults";

type Props = {};

const Results = (props: Props) => {
  return (
    <View style={styles.container}>
      <CountryResults />
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
