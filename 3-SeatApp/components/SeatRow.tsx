import React, { useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";

type SeatRowProps = {
  seats: number[];
};

const SeatRow = ({ seats }: SeatRowProps) => {
  const [selectedSeats, setSelectedSeats] = useState<number[]>([]);

  const handleSelect = (seat: number) => {
    setSelectedSeats((prev) =>
      prev.includes(seat) ? prev.filter((x) => x != seat) : [...prev, seat]
    );
  };

  return (
    <View style={style.container}>
      <FlatList
        data={seats}
        numColumns={4}
        keyExtractor={(item) => item.toString()}
        renderItem={({ item }) => {
          const isSelected = selectedSeats.includes(item);

          return (
            <View style={style.seatWrapper}>
              <Pressable
                style={[
                  style.seatContainer,
                  { backgroundColor: isSelected ? "red" : "green" },
                ]}
                onPress={() => handleSelect(item)}
              >
                <Text style={style.seatTitle}>{item}</Text>
              </Pressable>
            </View>
          );
        }}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },

  seatWrapper: {
    flex: 1,
    alignItems: "center",
  },

  seatContainer: {
    justifyContent: "center",
    width: "80%",
    marginVertical: 20,
    borderRadius: 20,
    aspectRatio: 1,
  },

  seatTitle: {
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
});

export default SeatRow;
