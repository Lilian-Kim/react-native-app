import React, {useState} from 'react';
import {
  View,
  TextInput,
  Text,
  Button,
  StyleSheet,
  Item,
  FlatList,
} from 'react-native';

const Todo = props => {
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState('');
  const onChangeText = text => {
    setTodo(text);
  };
  const onSaveTodoList = () => {
    setTodo('');
    if (!todo) {
      return alert('텍스트를 입력하세요.');
    }
    setTodoList(todoList.concat(todo));
  };
  const onRemoveTodoList = i => {
    setTodoList(todoList.filter((d, index) => index !== i));
  };
  console.log(todoList);

  return (
    <View style={styles.view}>
      <TextInput
        style={styles.input}
        value={todo}
        onChangeText={onChangeText}
        placeholder="투두리스트를 입력하세요."
      />
      <Button onPress={onSaveTodoList} title="저장" />
      {todoList && todoList.length ? (
        todoList.map((l, i) => (
          <>
            <Text>{l}</Text>
            <Button onPress={() => onRemoveTodoList(i)} title="삭제" />
          </>
        ))
      ) : (
        <Text>투두 리스트가 없습니다.</Text>
      )}
      <FlatList data={todoList} keyExtractor={(item, i) => i} />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    display: 'flex',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default Todo;
