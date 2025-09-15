import { useState } from "react";
import {
  Alert,
  StyleSheet,
  TextInput,
  View,
  Text,
  Dimensions,
} from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const StarGameScene = () => {
  const [guessNumber, setGuessNumber] = useState<string>("");

  const handleInput = (guessNumberStr: string) => {
    const numericValue = guessNumberStr.replace(/[^0-9]/g, "");
    setGuessNumber(numericValue);
  };

  const handleSubmit = () => {
    const number = Number.parseInt(guessNumber);
    if (isNaN(number) || number < 0 || number > 100) {
      Alert.alert("Error", "Please enter a number between 0 and 100.");
      return;
    }
  };

  const handleReset = () => {
    setGuessNumber("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🌟 Guess the Number</Text>
      <Text style={styles.subtitle}>Enter a number between 0 and 100</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Your Guess</Text>
        <View
          style={[
            styles.inputWrapper,
            guessNumber && styles.inputWrapperFilled,
          ]}
        >
          <TextInput
            placeholder="Enter number..."
            placeholderTextColor="#999"
            value={guessNumber}
            onChangeText={handleInput}
            keyboardType="numeric"
            maxLength={3}
            style={styles.textInput}
          />
          {guessNumber && (
            <View style={styles.inputIndicator}>
              <Text style={styles.inputIndicatorText}>✓</Text>
            </View>
          )}
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <PrimaryButton
          onPress={handleSubmit}
          title="Submit Guess"
          buttonContainerStyle={styles.submitButton}
        />
        <PrimaryButton
          onPress={handleReset}
          title="Reset"
          buttonContainerStyle={styles.resetButton}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 32,
    paddingHorizontal: 24,
    backgroundColor: "#ffffff",
    borderRadius: 24,
    marginHorizontal: 16,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 3,

    elevation: 12,

    // Subtle border
    borderWidth: 1,
    borderColor: "#f0f0f0",
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#2c3e50",
    textAlign: "center",
    marginBottom: 8,
    letterSpacing: 0.5,
  },

  subtitle: {
    fontSize: 16,
    color: "#7f8c8d",
    textAlign: "center",
    marginBottom: 32,
    fontWeight: "400",
  },

  inputContainer: {
    marginBottom: 32,
  },

  inputLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: "#34495e",
    marginBottom: 12,
    marginLeft: 4,
  },

  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
    borderRadius: 16,
    borderWidth: 2,
    borderColor: "#e9ecef",
    paddingHorizontal: 20,
    paddingVertical: 4,
    minHeight: 56,
  },

  inputWrapperFilled: {
    borderColor: "#27ae60",
    backgroundColor: "#ffffff",
  },

  textInput: {
    flex: 1,
    fontSize: 18,
    fontWeight: "500",
    color: "#2c3e50",
    paddingVertical: 12,
  },

  inputIndicator: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#27ae60",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 8,
  },

  inputIndicatorText: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "600",
  },

  buttonContainer: {
    flexDirection: "row",
    gap: 16,
    justifyContent: "center",
  },

  submitButton: {
    backgroundColor: "#3498db",
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 16,
    shadowColor: "#3498db",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },

  resetButton: {
    backgroundColor: "#e74c3c",
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 16,
    shadowColor: "#e74c3c",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
});

export default StarGameScene;
