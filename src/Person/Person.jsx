import React from "react";
import "./Person.css";

const Person = ({ name, age, click, changed, index, personId, children }) => {
  return (
    <div className="person">
      <p onClick={() => click(index)}>
        I'm {name} and I'm {age} years old
      </p>
      <p>{children}</p>
      <input type="text" name={name} onChange={(event) => changed(event, personId)} />
    </div>
  );
};

export default Person;
