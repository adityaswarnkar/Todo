import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Todo from './src/Todo';
import {Provider} from 'react-redux';
import store from './src/Redux/Store';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Todo />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B1A17',
  },
});
