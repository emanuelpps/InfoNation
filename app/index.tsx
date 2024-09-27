import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Title from "@/components/Title/Title";
import SearchBar from "@/components/SearchBar/SearchBar";
import Results from "@/components/Results/Results";

const index = () => {
  return (
    <View style={styles.container}>
      <Title />
      <SearchBar />
      <Results />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#f9ffdb",
  },
});

export default index;
