import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import React, { useState, useEffect } from "react";
import CountryResultCard from "./CountryResultCard";
import { useStoreSearchResults } from "@/store/StoreSearchResults";
import CountryCard from "../CountryData/CountryCard";
import { GetCountryData } from "@/api/GetCountryData";

const CountryResults = () => {
  const { searchResults } = useStoreSearchResults();
  const [countrySelected, setCountrySelected] = useState<string>("");

  useEffect(() => {
    const fetchCountryData = async () => {
      const country = await GetCountryData(countrySelected);
      setCountrySelected(country);
    };
    if (countrySelected) {
      fetchCountryData();
    }
  });
  return (
    <ScrollView>
      <View style={styles.container}>
        {countrySelected.length === 0 ? (
          Object.values(searchResults).length > 0 &&
          searchResults.map((country, index) => (
            <Pressable onPress={() => setCountrySelected(country.name.common)}>
              <CountryResultCard
                key={index}
                index={index}
                name={country.name.common}
                flag={country.flags.svg}
              />
            </Pressable>
          ))
        ) : (
          <CountryCard countrySelected={countrySelected} />
        )}
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
