import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import QuizScreen from "./src/app/QuizScreen";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <QuizScreen />
      <StatusBar style="auto" />
    </View>
  );
}
