import React, { useEffect, useState } from "react";
import "./../styles/App.css";

const App = () => {
  const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"];

  const [search, setSearch] = useState("");
  const [Fruits, setFruits] = useState(fruits);

  useEffect(() => {
    const remainFruits = fruits.filter((value) => {
      return value.includes(search);
    });
    setFruits(remainFruits);
  }, [search]);

  return (
    <div>
      <h1>Search item</h1>
      <input
        type="text"
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
      <div>
        <ul>
          {Fruits.length > 0 &&
            Fruits.map((elm, i) => {
              return <li key={i}>{elm}</li>;
            })}
        </ul>
      </div>
    </div>
  );
};

export default App;