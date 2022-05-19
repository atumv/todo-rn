import React from 'react';
import { View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { styles } from './styles.js';

export const Checkbox = ({ completed, toggleTodo }) => (
  <View>
    {completed ? (
      <Feather name="check-circle" style={styles.checkboxChecked} />
    ) : (
      <Feather name="circle" style={styles.checkbox} />
    )}
  </View>
);
