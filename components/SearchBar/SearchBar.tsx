import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import { GetCountries } from "@/api/GetCountries";
import { useStoreSearchResults } from "@/store/StoreSearchResults";
import { CountryData } from "@/store/StoreSearchResults";

type Props = {};

const SearchBar = (props: Props) => {
  const { setSearchResults } = useStoreSearchResults();
  const [searchText, setSearchText] = useState<string>("");

  useEffect(() => {
    const fetchSearch = async () => {
      const search = await GetCountries(searchText);
      setSearchResults(search);
    };
    if (searchText) {
      fetchSearch();
    }
  }, [searchText, setSearchResults]);

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputTitle}>Type to search</Text>
      <TextInput
        placeholder="Search..."
        placeholderTextColor={"white"}
        style={styles.inputStyles}
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
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
    color: "white",
  },
});

