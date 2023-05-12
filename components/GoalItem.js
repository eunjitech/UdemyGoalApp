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
} from "react-native";
function GoalItem(props) {
  return (
    <View style={styles.goalTextContainer}>
      <Text style={styles.goalText}>∙ {props.text}</Text>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalTextContainer: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "#039590",
    marginBottom: 13,
    backgroundColor: "#039590",
  },
  goalText: { color: "#ffffff" },
});
