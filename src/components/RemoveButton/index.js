import React from 'react';
import { Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { styles } from './styles.js';

export const RemoveButton = ({ id, removeTodo }) => (
  <Pressable onPress={() => removeTodo(id)}>
    <AntDesign style={styles.closeIcon} name="close" />
  </Pressable>
);
