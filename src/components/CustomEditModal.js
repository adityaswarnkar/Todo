import React, {memo, useEffect, useState} from 'react';
import {
  Modal,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {addIndex, updateTodo} from '../Redux/action/Action';

const CustomEditModal = memo(({visible, onClose}) => {
  const [miniInput, setMiniInput] = useState('');
  const [maxInput, setMaxInput] = useState('');
  const todos = useSelector(state => state.todo.todos);
  const index = useSelector(state => state.todo.index);
  const dispatch = useDispatch();

  useEffect(() => {
    let data = todos[index];
    setMiniInput(data?.title);
    setMaxInput(data?.about);
  }, [index]);

  const handleUpdateTodo = () => {
    dispatch(updateTodo(index, {title: miniInput, about: maxInput}));
    dispatch(addIndex(null));
    onClose();
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <TextInput
            value={miniInput}
            onChangeText={text => setMiniInput(text)}
            style={styles.textInputs}
            placeholder="Mini Input..."
            placeholderTextColor="#F0E3CA"
          />
          <TextInput
            multiline
            value={maxInput}
            onChangeText={text => setMaxInput(text)}
            style={[
              styles.textInputs,
              {height: 345, marginTop: 12, textAlignVertical: 'top'},
            ]}
            placeholder="Max Input..."
            placeholderTextColor="#F0E3CA"
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleUpdateTodo}
              style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
});

export default CustomEditModal;

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  modalContainer: {
    width: '95%',
    padding: 20,
    alignItems: 'center',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: '#1B1A17',
  },
  textInputs: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#A35709',
    borderRadius: 4,
    height: 34,
    padding: 8,
    color: '#F0E3CA',
    backgroundColor: '#1F1E1B',
    fontFamily: 'Roboto-Regular',
  },
  buttonContainer: {
    width: '60%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  closeButton: {
    height: 24,
    width: 64,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#FF8303',
    backgroundColor: '#1F1E1B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#D9D9D9',
    fontSize: 10,
    fontFamily: 'Roboto-Regular',
  },
});
