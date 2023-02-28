import React from "react";
import './App.css';

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

  return (
    <div className="App">
      <form onSubmit={addTodo}>
        <label>To Do:</label>
        <input type="text" value={desc} onChange={inputChanged} />
        <label>Date:</label>
        <input type="text" value={date} onChange={inputChange} />
        <input type="submit" value="Add"/>
      </form>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {
            todos.map((todo, index) => 
            <tr key={index}>
              <td>{todo.date}</td>
              <td>{todo.desc}</td>
            </tr>
            )
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
