import React from "react";
import Form from "./components/Form";
import Section from "./components/Section";
import 'semantic-ui-css/semantic.min.css'
import List from "./components/List"

const APP_TITLE = "TO-DO-APP";

const App = () => {
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
};

export default App;