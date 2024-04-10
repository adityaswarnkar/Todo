import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

export default function Todo() {
  const [data, setData] = useState([]);

  const AddTaskToList = (title, about) => {
    let task = {
      title: title,
      about: about,
    };
    setData([...data, task]);
  };

  return (
    <View style={styles.container}>
      <AddTask onDataReceived={AddTaskToList} />
      <TaskList Data={data} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 23,
  },
});
