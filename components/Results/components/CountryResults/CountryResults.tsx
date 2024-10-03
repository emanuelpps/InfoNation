import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import CountryResultCard from "./CountryResultCard";
import { useStoreSearchResults } from "@/store/StoreSearchResults";

const CountryResults = () => {
  const { searchResults } = useStoreSearchResults();
  return (
    <ScrollView>
      <View style={styles.container}>
        {Object.values(searchResults).length > 0 && searchResults.map((country, index) => (
          <CountryResultCard key={index} index={index} name={country.name.common} flag={country.flags.svg} />
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

