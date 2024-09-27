import { View, Text, StyleSheet } from "react-native";
import React from "react";

type Props = {};

const Title = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleContainer}>InfoNation</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  titleContainer: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
