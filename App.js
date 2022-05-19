import React, { useState } from 'react';
import { View, Keyboard } from 'react-native';

import { Header } from './src/components/Header';
import { Input } from './src/components/Input';
import { AddButton } from './src/components/AddButton';
import { TodoList } from './src/components/TodoList';

import { styles } from './styles.js';

const list = [
  { id: '1', title: 'Go shopping', completed: false },
  { id: '2', title: 'Buy coffee', completed: false },
  { id: '3', title: 'Watch a movie', completed: false },
];

const App = () => {
  const [todos, setTodos] = useState(list);
  const [inputValue, setInputValue] = useState('');

  const addTodo = (value) => {
    if (value.trim().length > 0) {
      const todo = {
        id: Date.now() + '',
        title: value.trim(),
        completed: false,
      };
      setTodos([...todos, todo]);
      setInputValue('');
      Keyboard.dismiss();
    }
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <View style={styles.container}>
      <Header />
      <Input inputValue={inputValue} setInputValue={setInputValue} addTodo={addTodo} />
      <AddButton inputValue={inputValue} addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} />
    </View>
  );
};

export default App;
