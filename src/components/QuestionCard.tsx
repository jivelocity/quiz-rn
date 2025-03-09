import { View, Text, StyleSheet } from "react-native";
import AnswerOption from "./AnswerOption";
import { Question } from "../types";
import { useState } from "react";
import Card from "./Card";
import { useQuizContext } from "../providers/QuizProvider";

type QuestionCard = {
  question: Question;
};

export default function QuestionCard({ question }: QuestionCard) {
  const { selectedOption, setSelectedOption } = useQuizContext();

  const onOptionSelected = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <Card title={question.title}>
      <View style={{ gap: 10 }}>
        {question.options.map((option) => (
          <AnswerOption
            key={option}
            option={option}
            onPress={() => onOptionSelected(option)}
            isSelected={option === selectedOption}
          />
        ))}
      </View>
    </Card>
  );
}
