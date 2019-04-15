import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const App = props => {
  const [personState, setPersonsState] = useState({
    persons: [
      { id: "asfa1", name: "Max", age: 28 },
      { id: "vasdf1", name: "Anchor", age: 29 },
      { id: "asdf11", name: "St", age: 26 }
    ],
    otherState: "some other value",
    showPersons: false
  });

  const nameChangedHandler = (event, id) => {
    const personIndex = personState.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...personState.persons[personIndex]
    };

    person.name = event.currentTarget.value;

    const persons = [...personState.persons];

    persons[personIndex] = person;

    setPersonsState({
      ...personState,
      persons
    });
  };

  const togglePersonsHandler = () => {
    setPersonsState({
      ...personState,
      showPersons: !personState.showPersons
    });
  };

  const deletePersonHandler = personIndex => {
    const persons = [...personState.persons];
    persons.splice(personIndex, 1);

    setPersonsState({
      ...personState,
      persons
    });
  };

  const style = {
    backgroundColor: "green",
    color: "white",
    font: "inherit",
    border: "1px solid blue",
    padding: "8px",
    cursor: "pointer"
  };

  let persons = null;

  if (personState.showPersons) {
    persons = (
      <div>
        {personState.persons.map((person, index) => (
          <Person
            name={person.name}
            age={person.age}
            click={deletePersonHandler}
            index={index}
            personId={person.id}
            key={person.id}
            changed={nameChangedHandler}
          />
        ))}
      </div>
    );

    style.backgroundColor = "red";
  }

  let classes = [];

  if (personState.persons.length <= 2) {
    classes.push("red");
  }

  if (personState.persons.length <= 1) {
    classes.push("bold");
  }

  return (
    <div className="app">
      <h1>Hi, I'm a React App</h1>
      <p className={classes.join(" ")}>This is really working!</p>
      <button style={style} onClick={togglePersonsHandler}>
        Switch name
      </button>
      {personState.showPersons ? persons : <div>"No persons..."</div>}
    </div>
  );
};

export default App;
