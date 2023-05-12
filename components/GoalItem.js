import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
  Pressable,
} from "react-native";
import theme from "../colors";
function GoalItem(props) {
  const { onDeleteItem } = props;

  return (
    <View style={styles.goalTextContainer}>
      <Pressable
        style={({ pressed }) => pressed && styles.pressedItem}
        android_ripple={{ color: "#007874" }} //AOS 물결효과
        onPress={() => onDeleteItem(props.id)}
      >
        <Text style={styles.goalText}>∙ {props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalTextContainer: {
    marginBottom: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: "#cccccc",
  },
  goalText: { color: theme.lightColor, padding: 10 },
  pressedItem: { opacity: 0.3 },
});
