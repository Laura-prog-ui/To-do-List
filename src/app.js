import React, { useState } from 'react';
import Form from './components/Form';
import Section from './components/Section';
import List from './components/List';
import "./style.css"
//import todos from "./api/index";


const app_title = 'To-Do-App';

const TodoApp = () => {
  const [todoList, setTodoList] = useState([]);
  const addTodo = (todo) => {
    setTodoList([...todoList, todo]);
  };
  const removeTodo = (index) => {
    setTodoList(todoList.filter((_, i) => i !== index));
  };
  const handleTodoClick = (index) => {
    setTodoList(
      todoList.map((item, i) => {
        if (i === index) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };
  const clearAll = () => {
    setTodoList([]);
  };
  return (
    <Section>
      <Form addTodo={addTodo} />
      <List
        list={todoList}
        removeTodo={removeTodo}
        handleTodoClick={handleTodoClick}
        clearAll={clearAll}
      />
    </Section>
  );
};

const App = () => {
  return (
    <div className="ui center aligned container ">
      <Section>
        <h1>{app_title}</h1>
      </Section>
      <TodoApp />
    </div>
  );
};

export default App;
