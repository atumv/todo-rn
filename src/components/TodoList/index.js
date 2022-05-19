import React from 'react';
import { View, FlatList } from 'react-native';
import { Todo } from '../Todo';
import { styles } from './styles.js';

export const TodoList = ({ todos, toggleTodo, removeTodo }) => (
  <View style={styles.container}>
    <FlatList
      data={todos}
      renderItem={({ item }) => (
        <Todo todo={item} toggleTodo={toggleTodo} removeTodo={removeTodo} />
      )}
      keyExtractor={(item) => item.id}
    />
  </View>
);
