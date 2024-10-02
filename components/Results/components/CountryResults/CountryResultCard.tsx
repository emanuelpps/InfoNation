import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";
import React from "react";

type Props = {
  name: string;
  flag: string;
  index: number;
};

const CountryResultCard = ({ name, flag, index }: Props) => (
  <View key={index} style={styles.container}>
    <Image source={{ uri: flag }} style={styles.image} />
    <Text>{name}</Text>
  </View>
);

export default CountryResultCard;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fdf0d5",
    padding: 10,
    width: 150,
    height: "auto",
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 1.37,
    shadowRadius: 7.49,
    elevation: 12,
    gap: 10,
    flexWrap: "wrap",
    flexDirection: "row",
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    
  },
});
