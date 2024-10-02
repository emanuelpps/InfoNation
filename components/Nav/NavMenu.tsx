import { View, StyleSheet, ImageBackground } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React from "react";

type Props = {};

const NavMenu = (props: Props) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/button-background.png")}
        resizeMode="cover"
        style={styles.backgroundImage}
      >
        <MaterialCommunityIcons
          name="backup-restore"
          size={30}
          color="#fdf0d5"
          style={styles.icon}
        />
      </ImageBackground>
    </View>
  );
};

export default NavMenu;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImage: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    overflow: "hidden",
  },
  icon: {
    elevation: 8,
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
});
