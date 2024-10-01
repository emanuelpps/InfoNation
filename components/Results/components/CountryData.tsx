import { View, Text, StyleSheet } from "react-native";
import React from "react";

type Props = {};

const CountryData = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text>
        <Text style={styles.dataTitle}>Official Name:</Text>{" "}
        <Text style={styles.dataContent}>name.official</Text>
      </Text>
      <Text>
        <Text>
          <Text> </Text>
        </Text>
      </Text>
    </View>
  );
};

export default CountryData;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  dataTitle: {
    fontWeight: "bold",
  },
  dataContent: {
    fontWeight: "condensed",
  },
});
