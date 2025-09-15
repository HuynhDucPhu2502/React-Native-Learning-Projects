import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  View,
} from "react-native";
import StarGameScene from "./screens/StarGameScreen";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <SafeAreaView style={styles.fill}>
        <LinearGradient
          colors={["#4c669f", "#3b5998", "#192f6a"]}
          style={styles.fill}
        >
          <ImageBackground
            style={styles.fill}
            imageStyle={{ opacity: 0.3 }}
            source={require("./assets/images/background.png")}
            resizeMode="cover"
          >
            <KeyboardAvoidingView
              style={styles.fill}
              behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
              <View style={styles.container}>
                <StarGameScene />
              </View>
            </KeyboardAvoidingView>
          </ImageBackground>
        </LinearGradient>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  fill: {
    flex: 1,
  },
});
