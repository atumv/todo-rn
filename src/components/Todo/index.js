import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { Checkbox } from '../Checkbox';
import { RemoveButton } from '../RemoveButton';
import { styles } from './styles.js';

export const Todo = ({ todo, toggleTodo, removeTodo }) => (
  <View style={styles.container}>
    <Pressable style={styles.pressableContainer} onPress={() => toggleTodo(todo.id)}>
      <Checkbox id={todo.id} completed={todo.completed} toggleTodo={toggleTodo} />
      <Text style={!todo.completed ? styles.title : [styles.title, styles.titleCompleted]}>
        {todo.title}
      </Text>
    </Pressable>
    <RemoveButton id={todo.id} removeTodo={removeTodo} />
  </View>
);
