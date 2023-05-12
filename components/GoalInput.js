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
  Modal,
  Image,
} from "react-native";
import theme from "../colors";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const { setCourseGoals, onAddGoal, visible, onCancel } = props;

  function goalInputHandler(text) {
    setEnteredGoalText(text);
  }

  function addGoalHandler() {
    onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="목표를 작성해봐요"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
          placeholderTextColor={theme.lightColor}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="추가"
              onPress={addGoalHandler}
              color={theme.lightColor}
            />
          </View>
          <View style={styles.button}>
            <Button title="취소" onPress={onCancel} color={theme.lightColor} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: theme.darkBg,
    paddingBottom: 100,
  },
  image: {
    width: 150,
    height: 150,
    margin: 30,
  },
  textInput: {
    borderWidth: 0.5,
    borderColor: theme.lightColor,
    borderRadius: 20,
    width: "100%",
    marginRight: 8,
    padding: 13,
    color: theme.lightColor,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: "40%",
    marginHorizontal: 8,
  },
});
