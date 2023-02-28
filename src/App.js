import React from "react";
import './App.css';
import Todolist from "./components/todolist"
function App() {
  const [desc, setDesc] = React.useState("");
  const [date, SetDate] = React.useState("");
  const [todos, setTodos] = React.useState([]);

  const inputChanged = (event) => {
    setDesc(event.target.value);
  }
  const inputChange = (event) => {
    SetDate(event.target.value);
  }

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, {desc: desc, date: date}]);
  }

  const selfDelete = (index) => {
    todos.splice(index, 1);
    setTodos([...todos]);      
  }

  return (
    <div className="App">
      <form onSubmit={addTodo}>
        <label>To Do:</label>
        <input type="text" name="desc" value={desc} onChange={inputChanged} />
        <label>Date:</label>
        <input type="text" name="date" value={date} onChange={inputChange} />
        <input type="submit" value="Add"/>
      </form>
      <Todolist todos={todos} selfDelete={selfDelete} />
    </div>
  );
}

export default App;
