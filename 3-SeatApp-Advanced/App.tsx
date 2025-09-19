import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Alert, Button, FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import SeatCard from "./components/SeatCard";

export interface seatInfo {
  seatNumber: number;
  isSelected: boolean;
  isBooked: boolean;
}

export default function App() {
  const [seats, setSeats] = useState<seatInfo[]>(
    Array.from({ length: 40 }, (_, i) => ({
      seatNumber: i + 1,
      isSelected: false,
      isBooked: false,
    }))
  );

  const handleOnSelect = (seatNumber: number) => {
    const seat = seats.find((item) => item.seatNumber === seatNumber);
    if (!seat) return;

    if (seat.isBooked) {
      Alert.alert("Thông báo", "Ghế này đã có người ngồi");
      return;
    }

    setSeats((prev) =>
      prev.map((item) => {
        if (item.seatNumber === seatNumber) {
          return { ...item, isSelected: !item.isSelected };
        }
        return item;
      })
    );
  };

  const handleSubmit = () => {
    setSeats((prev) =>
      prev.map((item) => {
        if (item.isSelected) {
          return { ...item, isSelected: false, isBooked: true };
        }
        return item;
      })
    );
  };

  const handleConfirm = () => {
    Alert.alert("Xác nhận", "Bạn có chắc chắn muốn đặt", [
      {
        text: "Chấp nhận",
        onPress: () => handleSubmit(),
      },
      {
        text: "Hủy",
      },
    ]);
  };

  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <Button title="Đặt Ghế" onPress={handleConfirm}></Button>
          <FlatList
            data={seats}
            numColumns={4}
            keyExtractor={(item) => item.seatNumber.toString()}
            renderItem={({ item }) => (
              <SeatCard onSelect={handleOnSelect} seat={item} />
            )}
          ></FlatList>
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
