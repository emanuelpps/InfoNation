import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";

type Props = {};

const SearchBar = (props: Props) => {
  const [searchText, setSearchText] = useState<string>("");

  /// armar un useEffect donde cada vez que searchtext se modofique se ejecute una llamada a la api con el respectivo parametro y se almacene la respuseta en un estado global
  
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
