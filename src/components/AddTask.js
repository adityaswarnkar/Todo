import {
  View,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  StyleSheet,
  Keyboard,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {addTodo} from '../Redux/action/Action';

export default function AddTask({onDataReceived}) {
  const [title, setTitle] = useState('');
  const [about, setAbout] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todo.todos);

  useEffect(() => {
    setTitle('');
    setAbout('');
    Keyboard.dismiss();
  }, [todos]);

  const handleAddTodo = () => {
    if (title !== '' && about !== '') {
      dispatch(
        addTodo({
          title: title,
          about: about,
        }),
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          value={title}
          onChangeText={text => setTitle(text)}
          style={styles.textInputs}
          placeholder="Title..."
          placeholderTextColor="#F0E3CA"
        />
        <TextInput
          value={about}
          onChangeText={text => setAbout(text)}
          style={[styles.textInputs, {marginTop: 8}]}
          placeholder="About..."
          placeholderTextColor="#F0E3CA"
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleAddTodo}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'space-between',
    marginRight: 8,
  },
  textInputs: {
    borderWidth: 1,
    borderColor: '#FF8303',
    borderRadius: 4,
    height: 34,
    padding: 8,
    color: '#F0E3CA',
    backgroundColor: '#1F1E1B',
    fontFamily: 'Roboto-Regular',
  },
  button: {
    height: 70,
    width: 70,
    borderWidth: 2,
    borderColor: '#FF8303',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 24,
    color: '#FF8303',
    fontFamily: 'Roboto-Regular',
  },
});
