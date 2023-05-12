import { StyleSheet, Text, View, Pressable } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
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
        <Text style={styles.goalText}>
          <EvilIcons name="pencil" size={25} color={theme.lightColor} />
          {props.text}
        </Text>
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
