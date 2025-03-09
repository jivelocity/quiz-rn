import { Text, StyleSheet, Pressable } from "react-native";
import { useQuizContext } from "../providers/QuizProvider";

type AnswerOption = {
  option: string;
};

export default function AnswerOption({ option }: AnswerOption) {
  const { selectedOption, setSelectedOption } = useQuizContext();

  const isSelected = selectedOption === option;

  return (
    <Pressable
      onPress={() => setSelectedOption?.(option)}
      style={[styles.container, isSelected && styles.selected]}
    >
      <Text>{option}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "lightgray",
    padding: 20,
    borderRadius: 100,
  },
  selected: {
    backgroundColor: "#e1f396",
    borderColor: "#b6d676",
  },
});
