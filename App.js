import React, { useState } from 'react';
import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  Keyboard
} from 'react-native';

function App() {
  const [text, setText] = useState("");

  const [tasks, setTask] = useState(["Hello World", "Learn React Native", "Learn Todo List"]);
  const handleAddTaskPress = () => {
    setTask([...tasks, text]);
    setText("");
    Keyboard.dismiss();
  };
  const handleDeleteTaskPress = (index) => {
    const newTask = [...tasks];
    newTask.splice(index, 1);
    setTask(newTask);
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title} >My Tasks ({text}) </Text>
        <Text style={styles.subTitle}>Enter Your tasks in the text boc bellow and proess the "Add" button to add</Text>

        <TextInput style={styles.input} onChangeText={(value) => {
          setText(value);
        }}
          value={text}
          placeholder="Enter Your task here" />
        <TouchableOpacity style={styles.buttonContainer} onPress={handleAddTaskPress}>
          <Text style={styles.button}>Add Task</Text>
        </TouchableOpacity>

        <View style={styles.divider} />
        <FlatList
          data={tasks} renderItem={({ item, index }) => (
            <View style={styles.taskContainer}>
              <Text style={styles.taskText}>{item}</Text>
              <TouchableOpacity style={styles.taskDelete}
                onPress={() => handleDeleteTaskPress(index)} >
                <Text style={styles.taskDeleteText}>X</Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={item => item + Date.now() + Math.random()}
        />

      </View>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    flex: 1
  }, title: {
    fontSize: 30,
    marginStart: 16,
  },
  subTitle: {
    fontSize: 20,
    marginTop: 4,
    color: '#666'
  },
  input: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#ddd',
    fontSize: 18,
    marginTop: 32,
  },
  buttonContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: "center",
    backgroundColor: '#59e1f3',
    alignSelf: 'flex-end',
    marginTop: 8,

  },
  button: {
    fontSize: 18,
  },
  divider: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 32

  },
  taskContainer: {
    marginBottom: 8,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12
  },
  taskText: { fontSize: 18 },
  taskDelete: {
    backgroundColor: 'red',
    width: 23,
    height: 23,
    borderRadius: 13,
    justifyContent: 'center',
    alignItems: 'center'
  },
  taskDeleteText: {
    fontSize: 18,
    color: 'white'
  },
});