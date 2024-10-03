import { View, Text, StyleSheet } from "react-native";
import React from "react";
import CountryFlag from "./CountryFlag";
import CountryData from "./CountryData";
import { useStoreSearchResults } from "@/store/StoreSearchResults";

type Props = {
  countrySelected: CountryData[];
};

interface CountryData {
  name: {
    common: string;
  };
  capital: string;
  continent: string;
  independent: boolean;
  unMember: boolean;
  population: number;
  flags: {
    svg: string;
  };
}

const CountryCard = ({ countrySelected }: Props) => (
  <View style={styles.container}>
    <CountryFlag countrySelected={countrySelected} />
    <CountryData countrySelected={countrySelected} />
  </View>
);

export default CountryCard;

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

