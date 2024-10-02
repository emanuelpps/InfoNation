import { View, Text, StyleSheet } from "react-native";
import React from "react";

type Props = {};

const CountryData = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.dataTitle}>Official Name:{"  "}</Text>
        <Text style={styles.dataContent}>{/*props.name.official*/}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.dataTitle}>Capital:{"  "}</Text>
        <Text style={styles.dataContent}>{/*props.capital*/}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.dataTitle}>Continent:{"  "}</Text>
        <Text style={styles.dataContent}>{/*props.continents*/}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.dataTitle}>Independent:{"  "}</Text>
        <Text style={styles.dataContent}>
          {/*props.independent ? "Yes" : "No"*/}
        </Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.dataTitle}>UN Member:{"  "}</Text>
        <Text style={styles.dataContent}>
          {/*props.unMember ? "Yes" : "No"*/}
        </Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.dataTitle}>Population:{"  "}</Text>
        <Text style={styles.dataContent}>{/*props.population*/}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.dataTitle}>Languages:{"  "}</Text>
        <Text style={styles.dataContent}>
          {/*props.languages.map((lang, index) => (
            <Text key={index}>
              {lang}
              {index < props.languages.length - 1 ? ", " : ""}
            </Text>
          ))*/}
        </Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.dataTitle}>Currencies:{"  "}</Text>
        <Text style={styles.dataContent}>{/*props.currencies[0].name*/}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.dataTitle}>Timezone:{"  "}</Text>
        <Text style={styles.dataContent}>{/*props.timezones*/}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.dataTitle}>Cars ID:{"  "}</Text>
        <Text style={styles.dataContent}>{/*props.car.signs*/}</Text>
      </View>
    </View>
  );
};

export default CountryData;

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    flexDirection: "column",
    justifyContent: "center",
    gap: 10,
    width: "70%",
  },
  textContainer: {
    flexDirection: "row",
  },
  dataTitle: {
    fontWeight: "bold",
  },
  dataContent: {
    fontWeight: "light",
  },
});
