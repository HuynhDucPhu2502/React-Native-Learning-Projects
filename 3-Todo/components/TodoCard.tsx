import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { Todo } from "../App";

export interface TodoCardProps {
  todo: Todo;
  onDelete: (id: number) => void;
}

const TodoCard = ({ todo, onDelete }: TodoCardProps) => {
  return (
    <View style={style.cardContainer}>
      <Text style={{ color: "white" }}>{todo.text}</Text>
      <Button title="Xóa" onPress={() => onDelete(todo.id)}></Button>
    </View>
  );
};

const style = StyleSheet.create({
  cardContainer: {
    width: "80%",
    marginHorizontal: "auto",
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 20,
    backgroundColor: "blue",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
});

export default TodoCard;
