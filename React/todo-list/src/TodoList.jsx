import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  let [todos, setTodos] = useState([]);
  let [newTodo, setNewTodo] = useState("");

  let updateTodoValue = (e) => {
    setNewTodo(e.target.value);
  };

  let addTodo = () => {
    setTodos([...todos, { task: newTodo, id: uuidv4(), isDone: false }]);
    setNewTodo("");
  };

  let deleteTodo = (id) => {
    setTodos(todos.filter((e) => e.id != id));
  };

  let toggleDoneTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id == id) {
          return { ...todo, isDone: !todo.isDone };
        }
        return todo;
      })
    );
  };

  let markAllAsDone = () => {
    setTodos(
      todos.map((todo) => {
        todo.isDone = true;
        return todo;
      })
    );
  };

  return (
    <>
      <h2>Todo List</h2>
      <input
        onChange={updateTodoValue}
        onKeyDown={(event) => {
          if (event.key == "Enter") {
            addTodo();
          }
        }}
        value={newTodo}
        placeholder="Enter task to add"
        style={{ padding: ".5rem", margin: ".5rem", width: "20rem" }}
      />
      <button onClick={addTodo}>Add Task</button>

      <h2>Tasks Todo</h2>
      <ul style={{ textAlign: "left" }}>
        {todos.map((todo, index) => (
          <li
            key={todo.id}
            style={{
              marginBlock: "1.5rem",
              ...(todo.isDone ? { textDecoration: "line-through" } : {}),
            }}
          >
            {todo.task}
            <button
              style={{ float: "right", marginInline: ".5rem" }}
              onClick={() => toggleDoneTodo(todo.id)}
            >
              {todo.isDone ? "Undone" : "Done"}
            </button>
            <button
              style={{ float: "right" }}
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      <button onClick={markAllAsDone}>Mark All As Done</button>
    </>
  );
}
