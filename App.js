import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import theme from "./colors";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }
  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, key: Math.random().toString() },
    ]);
    endAddGoalHandler();
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((item) => item.key !== id);
    });
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="목표 추가하기"
          color={theme.lightColor}
          onPress={startAddGoalHandler}
        />
        <GoalInput
          visible={modalIsVisible}
          setCourseGoals={setCourseGoals}
          onAddGoal={addGoalHandler}
          onCancel={endAddGoalHandler}
        />

        <View style={styles.goalsContainer}>
          {(courseGoals.length > 0 && (
            <FlatList
              data={courseGoals}
              renderItem={(itemData) => {
                return (
                  <GoalItem
                    text={itemData.item.text}
                    onDeleteItem={deleteGoalHandler}
                    id={itemData.item.key}
                  />
                );
              }}
              keyExtractor={(item, index) => {
                return item.key;
              }}
              alwaysBounceVertical={false}
            ></FlatList>
          )) || (
            <Text
              style={{
                color: theme.lightColor,
                alignSelf: "center",
                paddingTop: 70,
                fontSize: 15,
              }}
            >
              목표가 없습니다.
            </Text>
          )}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: theme.bg,
  },
  goalsContainer: {
    flex: 5,
    marginTop: 30,
  },
});
