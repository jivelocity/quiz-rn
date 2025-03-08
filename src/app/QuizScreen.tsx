import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import QuestionCard from "../components/QuestionCard";
import { FontAwesome6 } from "@expo/vector-icons";
import questions from "../questions";

export default function QuizScreen() {
  const question = questions[0];

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Question 1/5</Text>
        </View>

        <View>
          <QuestionCard question={question} />
          <Text style={styles.time}>20 sec</Text>
        </View>

        <Pressable
          onPress={() => console.warn("pressed")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Next</Text>
          <FontAwesome6
            style={styles.buttonIcon}
            name="arrow-right-long"
            size={16}
            color="white"
          />
        </Pressable>
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
  button: {
    backgroundColor: "#005050",
    padding: 20,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "500",
    letterSpacing: 1.5,
    fontSize: 16,
  },
  buttonIcon: {
    position: "absolute",
    right: 20,
  },
});
