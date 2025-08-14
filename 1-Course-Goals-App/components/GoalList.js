import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";

const GoalList = ({ courseGoals, removeGoal }) => {
  return (
    <View style={{ flexDirection: "column", flex: 1 }}>
      <Text style={{ color: "white", marginBottom: 4 }}>List Of Goals</Text>
      <FlatList
        data={courseGoals}
        ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => (
          <View
            style={{
              borderRadius: 20,
              overflow: "hidden",
              borderWidth: 1,
              borderBlockColor: "transparent",
            }}
          >
            <Pressable
              style={({ pressed }) =>
                pressed
                  ? [styles.goalCardContainer, { opacity: 0.8 }]
                  : styles.goalCardContainer
              }
              android_ripple={{ color: "black", borderless: true }}
              onPress={() => removeGoal(itemData.item.id)}
            >
              <Text style={{ color: "white", fontSize: 16 }}>
                {itemData.item.value}
              </Text>
            </Pressable>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  goalCardContainer: {
    paddingVertical: 8,
    minHeight: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#6e6af1ff",
  },
});

export default GoalList;
