import React, { useState } from 'react';
import Form from './components/Form';
import Section from './components/Section';
import List from './components/List';

<<<<<<< HEAD
const APP_TITLE = 'TO-DO-APP';
=======
const app_title = 'TO-DO-APP';
>>>>>>> ca6c03a674fd10626037596ef15201aabf51cd76
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
    const [todoList, setTodoList] = useState(list);
        return (
            <div className="ui container center aligned">
            <Section>
                <h1>{app_title}</h1>
            </Section>
            <Section>
                <Form />
            </Section>
            <section>
                <List list={todoList} />
            </section>
        </div>
    );
>>>>>>> ca6c03a674fd10626037596ef15201aabf51cd76
};

export default App;  