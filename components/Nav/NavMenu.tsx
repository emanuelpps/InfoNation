import { View, Text } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React from "react";

type Props = {};

const NavMenu = (props: Props) => {
  return (
    <View>
      <MaterialCommunityIcons name="backup-restore" size={30} color="#fdf0d5" />
    </View>
  );
};

export default NavMenu;
