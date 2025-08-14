import { useState } from "react";
import {
  Alert,
  Button,
  Image,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const GoalInput = ({ addGoalHandler, removeAllGoals }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [enteredGoalText, setEnteredGoalText] = useState("");

  const onAddGoalHandler = () => {
    if (enteredGoalText.trim().length === 0) {
      Alert.alert("Invalid Goal", "Please enter a valid goal", [
        { text: "OK", style: "destructive" },
      ]);
      return;
    }

    addGoalHandler(enteredGoalText);
    setEnteredGoalText("");
    setIsModalVisible(false);
  };

  const handleOpenGoalInputModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseGoalInputModal = () => {
    setIsModalVisible(false);
  };

  return (
    <View>
      <View
        style={{
          marginBottom: 16,
          paddingHorizontal: 16,
          paddingVertical: 8,
          gap: 12,
          backgroundColor: "#3B38A0",
          borderRadius: 20,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
            color: "white",
          }}
        >
          Goal Manager
        </Text>
        <Button title="Add Goal" onPress={handleOpenGoalInputModal} />
        <Button title="Clear All Goals" color="red" onPress={removeAllGoals} />
      </View>

      <Modal visible={isModalVisible} animationType="fade" transparent={true}>
        <View style={styles.modalBackdrop}>
          <View style={styles.modalContent}>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Image
                source={require("../assets/images/goal.png")}
                style={{ width: 100, height: 100, marginBottom: 10 }}
              />
            </View>
            <Text
              style={{
                fontSize: 16,
                textAlign: "center",
                color: "white",
                marginBottom: 10,
              }}
            >
              Create Your Goal
            </Text>
            <TextInput
              placeholder="Enter goal name here...."
              placeholderTextColor={"#ffffffff"}
              onChangeText={(value) => setEnteredGoalText(value)}
              style={{
                borderWidth: 1,
                borderColor: "white",
                marginBottom: 12,
                color: "white",
              }}
              value={enteredGoalText}
            />
            <View style={{ flexDirection: "row", marginBottom: 12 }}>
              <View style={{ flex: 1 }}>
                <Button title="Add Goal" onPress={onAddGoalHandler} />
              </View>
              <View style={{ flex: 1 }}>
                <Button
                  title="Cancel"
                  color="red"
                  style={{ flex: 1 }}
                  onPress={handleCloseGoalInputModal}
                />
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalBackdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#3B38A0",
    padding: 20,
    borderRadius: 20,
    width: "80%",
  },
});

export default GoalInput;
