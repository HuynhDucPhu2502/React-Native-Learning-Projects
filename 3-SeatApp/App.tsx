import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SeatRow from "./components/SeatRow";

export default function App() {
  const seats = Array.from({ length: 32 }, (_, i) => i + 1);

  return (
    <View style={styles.container}>
      <SeatRow seats={seats} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 20,
  },
});
