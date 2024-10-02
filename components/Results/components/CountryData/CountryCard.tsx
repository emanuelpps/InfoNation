import { View, Text, StyleSheet } from "react-native";
import React from "react";
import CountryFlag from "./CountryFlag";
import CountryData from "./CountryData";

type Props = {};

const ContryCard = (props: Props) => {
  return (
    <View style={styles.container}>
      <CountryFlag />
      <CountryData />
    </View>
  );
};

export default ContryCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "80%",
    alignItems: "center",
    backgroundColor: "#fdf0d5",
    padding: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 1.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
});
