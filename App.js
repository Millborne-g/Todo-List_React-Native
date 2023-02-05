import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View, Keyboard, ScrollView } from 'react-native';
import TaskList from './components/TaskList';


export default function App() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] =useState([]);

  const handleSubmit = () =>{
    setTaskList([...taskList, task]);
    setTask(null);
    Keyboard.dismiss();
  }

  const completeTask = (index) =>{
    let taskCopy = [...taskList];
    taskCopy.splice(index, 1);
    setTaskList(taskCopy);
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      

      <View style={styles.headlineContainer}>
        <Text style={styles.headline}>Today's tasks</Text>
      </View>
      <ScrollView>
        <View style={styles.itemContainer}>
          <TaskList taskList={taskList} completeTask={completeTask}/>
        </View>
      </ScrollView>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios"? "padding": "height"}
        style={styles.textBox_btn_container}
      >
        <View style={styles.textBox_btn_container_inner}>
          <TextInput placeholder='Enter task here!' style={styles.taskTextBox} onChangeText={(e)=>setTask(e)} value={task}/>
          <TouchableOpacity onPress={() => handleSubmit(task)}>
            <View style={styles.addBtn_container}>
              <Text style={styles.addBtn_text}>
                +
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        

      </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },

  headlineContainer:{
    marginTop: 94,
    marginLeft: 20,
    marginRight: 20,
  },

  headline: {
    fontSize: 24,
    fontWeight: 'bold',

  },

  itemContainer: {
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
  },

  textBox_btn_container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 30,
  },

  textBox_btn_container_inner: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  taskTextBox: {
    width: 246,
    height: 45,
    backgroundColor: '#FFFFFF',
    elevation: 5,
    borderRadius: 60,
    paddingLeft: 20,
  },

  addBtn_container: {
    height: 60,
    width: 60,
    borderRadius: 60,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5
  },

  addBtn_text: {
    fontSize: 30
  }
});
