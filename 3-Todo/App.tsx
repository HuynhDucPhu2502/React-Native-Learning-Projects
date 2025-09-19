import { useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import TodoCard from "./components/TodoCard";

export interface Todo {
  id: number;
  text: string;
}

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [currentInput, setCurrentInput] = useState("");

  const onSubmit = () => {
    setTodos([...todos, { id: todos.length + 1, text: currentInput }]);

    setCurrentInput("");
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputCard}>
        <Text style={styles.title}>Todo Form</Text>
        <TextInput
          placeholder="Nhập việc làm vào đây..."
          onChangeText={(text) => setCurrentInput(text)}
          value={currentInput}
          style={styles.inputContainer}
        ></TextInput>
        <Button title="Thêm" onPress={onSubmit}></Button>
      </View>

      <FlatList
        style={{ marginTop: 20 }}
        data={todos}
        renderItem={({ item }) => (
          <TodoCard onDelete={handleDelete} todo={item} />
        )}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 100,
  },

  inputCard: {
    width: "80%",
    paddingTop: 20,

    marginHorizontal: "auto",

    alignItems: "center",
    justifyContent: "space-around",

    borderWidth: 1,
    borderColor: "black",
    borderRadius: 20,
    aspectRatio: 2,
  },

  inputContainer: {
    width: "80%",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 20,
    paddingHorizontal: 10,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
