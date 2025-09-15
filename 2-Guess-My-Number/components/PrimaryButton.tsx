import React from "react";
import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";

interface PrimaryButtonProps {
  onPress: () => void;
  title: string;
  buttonContainerStyle?: StyleProp<ViewStyle>;
  textContainerStyle?: StyleProp<TextStyle>;
}

const PrimaryButton = ({
  onPress,
  title,
  buttonContainerStyle,
  textContainerStyle,
}: PrimaryButtonProps) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={onPress}
        style={[styles.buttonInnerContainer, buttonContainerStyle]}
        android_ripple={{ color: "white" }}
      >
        <View>
          <Text style={[styles.textContainer, textContainerStyle]}>
            {title}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "orange",
    color: "white",
  },
  textContainer: {
    color: "white",
    fontWeight: "bold",
  },
});

export default PrimaryButton;
