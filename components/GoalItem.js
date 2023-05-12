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
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "#039590",
    marginBottom: 10,
    backgroundColor: "#039590",
  },
  goalText: { color: "#ffffff", padding: 10 },
  pressedItem: { opacity: 0.3 },
});
