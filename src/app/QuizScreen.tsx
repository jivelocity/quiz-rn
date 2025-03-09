import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import QuestionCard from "../components/QuestionCard";
import { FontAwesome6 } from "@expo/vector-icons";
import Card from "../components/Card";
import Button from "../components/Button";
import { useQuizContext } from "../providers/QuizProvider";
import { useEffect, useRef, useState } from "react";
import { useTimer } from "../hooks/useTimer";

export default function QuizScreen() {
  const { question, onNext, questionIndex, score, totalQuestions, bestScore } =
    useQuizContext();
  const { time, startTimer, clearTimer } = useTimer(20);

  useEffect(() => {
    if (question) {
      startTimer();
    }
    return () => {
      clearTimer();
    };
  }, [question]);

  useEffect(() => {
    if (time <= 0) {
      onNext();
    }
  }, [time]);

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>
            {question
              ? `Question ${questionIndex + 1}/${totalQuestions}`
              : "Quiz Finished"}
          </Text>
        </View>

        {question ? (
          <View>
            <QuestionCard question={question} />
            <Text style={styles.time}>{time} sec</Text>
          </View>
        ) : (
          <Card title="Well done">
            <Text>
              Correct Answers {score}/{totalQuestions}
            </Text>
            <Text>Best Score: {bestScore}</Text>
          </Card>
        )}

        <Button
          title="Next"
          onPress={onNext}
          rightIcon={
            <FontAwesome6 name="arrow-right-long" size={16} color="white" />
          }
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#fdfef4",
    paddingTop: 40,
    paddingBottom: 20,
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "space-between",
  },
  title: {
    textAlign: "center",
    color: "#005050",
  },
  time: {
    textAlign: "center",
    color: "#005050",
    marginTop: 15,
    fontWeight: "bold",
  },
});
