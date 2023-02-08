<<<<<<< HEAD
import React, { useState } from 'react';
import Form from './components/Form';
import Section from './components/Section';
import List from './components/List';
=======
import React from "react";
import Form from "./components/Form";
import Section from "./components/Section";
import List from "./components/List"
>>>>>>> 8f4778ac6b2eb30e812ca56f0491e4d91c3f3587

const APP_TITLE = 'TO-DO-APP';
const list = [
  { title: 'test #1', completed: false },
  { title: 'test #2', completed: false },
  { title: 'test #3', completed: false },
];

const App = () => {
<<<<<<< HEAD
  const [todoList, setTodoList] = useState(list);
  return (
    <div className="ui container center aligned">
      <Section>
        <h1>{APP_TITLE}</h1>
      </Section>
      <Section>
        <Form />
      </Section>
      <section>
        <List list={todoList} />
      </section>
    </div>
  );
=======
    return (
        <div className="ui container center aligned">
            <Section>
                <h1>{APP_TITLE}</h1>
            </Section>
            <Section>
                <Form />
                <List/>
            </Section>
        </div>
    );
>>>>>>> 8f4778ac6b2eb30e812ca56f0491e4d91c3f3587
};

export default App;