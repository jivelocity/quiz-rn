import {
  View,
  Text,
  Pressable,
  PressableProps,
  StyleSheet,
} from "react-native";
import React from "react";

type Button = {
  title: string;
  rightIcon?: React.ReactNode;
} & PressableProps;

export default function Button({
  title,
  rightIcon,
  ...pressableProps
}: Button) {
  return (
    <Pressable style={styles.container} {...pressableProps}>
      <Text style={styles.text}>{title}</Text>
      <View style={styles.rightIcon}>{rightIcon}</View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#005050",
    padding: 20,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontWeight: "500",
    letterSpacing: 1.5,
    fontSize: 16,
  },
  rightIcon: {
    position: "absolute",
    right: 20,
  },
});
