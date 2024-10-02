import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useState } from "react";
import CountryResultCard from "./CountryResultCard";

type Props = {};

const CountryResults = (props: Props) => {
  const [countries] = useState([
    {
      name: "Argentina",
      flag: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Flag_of_Argentina.svg",
    },
    {
      name: "Brazil",
      flag: "https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg",
    },
    {
      name: "Colombia",
      flag: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Colombia.svg",
    },
    {
      name: "Mexico",
      flag: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg",
    },
  ]);
  return (
    <ScrollView>
      <View style={styles.container}>
        {countries.map((country, index) => (
          <CountryResultCard index={index} name={country.name} flag={country.flag} />
        ))}
      </View>
    </ScrollView>
  );
};

export default CountryResults;

const styles = StyleSheet.create({
  container: {
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    flexDirection: "row",
    gap: 20,
  },
});
