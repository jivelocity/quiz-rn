import { View, Text, StyleSheet } from "react-native";

type AnswerOption = {
  option: string;
};

export default function AnswerOption({ option }: AnswerOption) {
  return (
    <View style={styles.container}>
      <Text>{option}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "lightgray",
    padding: 20,
    borderRadius: 100,
  },
});
