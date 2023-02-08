import React, { useState } from 'react';
import Form from './components/Form';
import Section from './components/Section';
import List from './components/List';

const APP_TITLE = 'TO-DO-APP';
const list = [
  { title: 'test #1', completed: false },
  { title: 'test #2', completed: false },
  { title: 'test #3', completed: false },
];

const App = () => {
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
};

export default App;