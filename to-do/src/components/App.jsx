import React, { useState } from "react";

function App() {

const [inputText, setInputText] = useState("");
const [liElements, setLiElements] = useState([]);


function updateItems(){
  setLiElements((preValues) => {
    return [...preValues, inputText]
  })

  setInputText("");
}


function updateInput(event){
  const inputValue = event.target.value;
  setInputText(inputValue);
}

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={updateInput} type="text" value={inputText}/>
        <button onClick={updateItems}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {liElements.map((item) => <li>{item}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
