import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {addIndex, deleteTodo} from '../Redux/action/Action';
import CustomAlertModal from './CustomAlertModal';
import CustomEditModal from './CustomEditModal';

export default function TaskList() {
  const [data, setData] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [editToggle, setEditToggle] = useState(null);
  const todos = useSelector(state => state.todo.todos);
  const index = useSelector(state => state.todo.index);
  const dispatch = useDispatch();

  useEffect(() => {
    setData(todos);
  }, [todos]);

  const openModal = index => {
    dispatch(addIndex(index));
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    dispatch(addIndex(null));
  };

  const openEditModal = () => {
    setEditModalVisible(true);
  };

  const closeEditModal = () => {
    setEditModalVisible(false);
    setEditToggle(null);
    dispatch(addIndex(null));
  };

  const toggleEditButtons = index => {
    if (editToggle === index) {
      setEditToggle(null);
    } else {
      setEditToggle(index);
    }
  };

  const handleDeleteTodo = value => {
    dispatch(deleteTodo(index));
    setModalVisible(false);
    dispatch(addIndex(null));
  };

  const Item = item => {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.taskContainer}
          onPress={() => {
            toggleEditButtons(item.index);
          }}>
          <View style={styles.inputContainer}>
            <Text style={styles.titleText}>{item.item.title}</Text>
            <Text style={styles.aboutText}>{item.item.about}</Text>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              openModal(item.index);
            }}>
            <Image
              style={styles.buttonDelete}
              source={require('../../assets/images/crossDark.png')}
            />
          </TouchableOpacity>
        </TouchableOpacity>
        <View
          style={[
            styles.editContainer,
            {display: item.index == editToggle ? 'flex' : 'none'},
          ]}>
          <TouchableOpacity style={[styles.button, {marginRight: 8}]}>
            <Image
              style={styles.buttonDelete}
              source={require('../../assets/images/infoDark.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              dispatch(addIndex(item.index));
              openEditModal();
            }}>
            <Image
              style={styles.buttonDelete}
              source={require('../../assets/images/editDark.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const NoTask = () => {
    return (
      <View style={styles.noTaskContainer}>
        <View style={styles.lineView} />
        <View style={styles.noTaskView}>
          <Text style={styles.noTasksText}>No tasks</Text>
        </View>
        <View style={styles.lineView} />
      </View>
    );
  };

  return (
    <View style={styles.mainContainer}>
      {data?.length > 0 ? (
        <FlatList
          data={data}
          renderItem={({item, index}) => <Item item={item} index={index} />}
          keyExtractor={(_, index) => index.toString()}
        />
      ) : (
        <NoTask />
      )}
      <CustomAlertModal
        visible={modalVisible}
        onClose={closeModal}
        onDeleteTask={handleDeleteTodo}
        message="Delete this task?"
      />
      <CustomEditModal visible={editModalVisible} onClose={closeEditModal} />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: 40,
  },
  container: {
    marginBottom: 16,
  },
  taskContainer: {
    width: '100%',
    padding: 16,
    borderWidth: 2,
    borderColor: '#A35709',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#1F1E1B',
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'space-between',
    marginRight: 8,
  },
  noTaskContainer: {
    height: 55,
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  lineView: {
    borderWidth: 3,
    borderColor: '#FF8303',
    width: 64,
  },
  noTaskView: {
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noTasksText: {
    fontSize: 24,
    fontWeight: '400',
    color: '#FFF',
    fontFamily: 'Roboto-Regular',
  },
  editContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    margin: 8,
  },
  titleText: {
    height: 26,
    fontSize: 22,
    fontWeight: '500',
    color: '#F0E3CA',
    fontFamily: 'Roboto-Regular',
  },
  aboutText: {
    height: 16,
    fontSize: 14,
    fontWeight: '400',
    color: '#F0E3CA',
    fontFamily: 'Roboto-Regular',
  },
  buttonDelete: {
    height: 32,
    width: 32,
  },
  buttonText: {
    fontSize: 24,
    color: '#FF8303',
    fontFamily: 'Roboto-Regular',
  },
});
