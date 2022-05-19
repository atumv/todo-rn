import React from 'react';
import { TextInput } from 'react-native';
import { styles } from './styles.js';

export const Input = ({ inputValue, setInputValue, addTodo }) => {
  const handleKeyPress = (event) => {
    if (event.nativeEvent.key == 'Enter') {
      addTodo(inputValue);
    }
  };

  return (
    <TextInput
      style={styles.input}
      value={inputValue}
      onChangeText={setInputValue}
      placeholder={'Task name'}
      onKeyPress={handleKeyPress}
    />
  );
};
