import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Title from "@/components/Title/Title";
import SearchBar from "@/components/SearchBar/SearchBar";
import Results from "@/components/Results/Results";
import NavMenu from "@/components/Nav/NavMenu";

const index = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Title />
        <SearchBar />
      </View>
      <Results />
      <View style={styles.navContainer}>
        <NavMenu />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    backgroundColor: "#669bbc",
  },
  headerContainer: {
    backgroundColor: "#003049",
    width: "100%",
    borderBottomEndRadius: 70,
    borderBottomStartRadius: 70,
    alignItems: "center",
    marginBottom: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 1.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
  navContainer: {
    backgroundColor: "#003049",
    width: "100%",
    borderTopEndRadius: 70,
    borderTopStartRadius: 70,
    alignItems: "center",
    marginTop: 20,
    padding: 20,
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

export default index;
