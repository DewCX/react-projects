import React, {useState} from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Tasks from './components/task';

export default function App() {

  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);


  const handleAddTask = () => {
    setTaskItems([...taskItems, task]);
    setTask(null);
  };

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };



  return (
    <View style={styles.container}>
      {/* Daily Tasks */}
      <View style={styles.taskWrapper}>
        <Text style={styles.SectionTitle}>Today's Tasks</Text>

  
        <View style={styles.item}>
          {/* Item section */}

          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={ () => completeTask(index)}>
                  <Tasks text={item} />
                </TouchableOpacity>
              );
            })
          }
        </View>
      </View>
      {/* write a task */}

      <KeyboardAvoidingView
        behavior = {Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}>
        <TextInput style={styles.input} placeholder={"Write a task"} value={task} onChangeText={(text) => setTask(text)} />

        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>

      </KeyboardAvoidingView>
    </View>
  );
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: "#e65424",
    borderWidth: 7,
  },
  taskWrapper: {
    paddingTop: 30,
    paddingHorizontal: 60,
    borderColor: "#251408",
    borderWidth: 3,
    borderRadius: 20,
  },
  SectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: "#e65424",
  },
  item: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 60,
    borderColor: "#251408",
    borderWidth: 2,
    width: 250,
  },
  addWrapper: {
    width: 50,
    height: 50,
    backgroundColor: "#FFF",
    borderRadius: 60,
    justifyContent: "center",
    borderColor: "#251408",
    borderWidth: 1,
  },
  addText: {
    color: "#e65424",
    position: "absolute",
    left: 15,
    fontSize: 30,
  }
})
