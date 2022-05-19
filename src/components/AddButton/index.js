import React from 'react';
import { Pressable, View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { styles } from './styles.js';

export const AddButton = ({ inputValue, addTodo }) => (
  <Pressable onPress={() => addTodo(inputValue)}>
    <View style={styles.container}>
      <Feather name="plus" style={styles.plusIcon} />
      <Text style={styles.text}>Add</Text>
    </View>
  </Pressable>
);
