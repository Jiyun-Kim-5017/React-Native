import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [goalList, setGoalList] = useState([]);

  const inputHandler = (inputText) => {
    setEnteredGoal(inputText);
  };

  const addGoalHandler = () => {
    setGoalList((currentList) => [...currentList, enteredGoal]); // 새 상태가 이전 상태에 의존한다면 함수형으로 전달하는 것이 좋음
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Your goal!"
          style={styles.textInput}
          onChangeText={inputHandler}
        />
        <Button title="Add" onPress={addGoalHandler} />
      </View>
      <View style={styles.listContainer}>
        {goalList.map((goal, idx) => {
          return (
            <Text key={idx} style={styles.listItem}>
              {goal}
            </Text>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 32,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 5,
    width: "80%",
    marginRight: 8,
    padding: 2,
    paddingLeft: 5,
  },
  listContainer: {
    flex: 5.5,
  },
  listItem: {
    padding: 8,
    margin: 5,
    backgroundColor: "#EEF6FA",
    borderRadius: 5,
  },
});
