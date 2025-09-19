import React from "react";
import { seatInfo } from "../App";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface SeatCardProps {
  seat: seatInfo;
  onSelect: (seatNumber: number) => void;
}

const SeatCard = ({ seat, onSelect }: SeatCardProps) => {
  let cardColor = "blue";

  if (seat.isBooked) cardColor = "gray";
  else if (seat.isSelected) cardColor = "red";

  return (
    <Pressable
      onPress={() => onSelect(seat.seatNumber)}
      style={[style.cardContainer, { backgroundColor: cardColor }]}
    >
      <Text style={{ color: "white", fontSize: 24 }}>{seat.seatNumber}</Text>
    </Pressable>
  );
};

const style = StyleSheet.create({
  cardContainer: {
    flex: 1,
    aspectRatio: 1,
    margin: 4,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
});

export default SeatCard;
