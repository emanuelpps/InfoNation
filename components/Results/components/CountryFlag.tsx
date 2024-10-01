import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

type Props = {};

const CountryFlag = (props: Props) => {
  return (
    <View>
      <Image
        source={require("../../../assets/images/Flag-argentina.svg")}
        style={styles.image}
      />
      <Text style={styles.countryName}>name.common</Text>
    </View>
  );
};

export default CountryFlag;

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  countryName: {
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});
