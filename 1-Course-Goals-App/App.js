import { useState } from "react";
import { StyleSheet, View } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalList from "./components/GoalList";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = (enteredGoalText) => {
    setCourseGoals((prev) => [
      ...prev,
      {
        id: Math.random().toString(),
        value: enteredGoalText,
      },
    ]);
  };

  const removeAllGoals = () => {
    setCourseGoals([]);
  };

  const removeGoal = (id) => {
    return setCourseGoals((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <GoalInput
          removeAllGoals={removeAllGoals}
          addGoalHandler={addGoalHandler}
        />

        <GoalList courseGoals={courseGoals} removeGoal={removeGoal} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
});
