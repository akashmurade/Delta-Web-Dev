import { useDispatch, useSelector } from "react-redux";
import AddForm from "./AddForm";
import { deleteTodo, toogleDone } from "../features/todo/todoSlice";

export default function Todo() {
  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const invertDone = (id) => {
    dispatch(toogleDone(id));
  };

  return (
    <>
      <AddForm />
      <h2>Todos</h2>
      <table border={1}>
        <thead>
          <tr>
            <th>Task</th>
            <th>isDone</th>
            <th>toggleDone</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr>
              <td>{todo.task}</td>
              <td>{todo.isDone ? "Done" : "Not Done"}</td>
              <td>
                <button onClick={() => invertDone(todo.id)}>Toogle</button>
              </td>
              <td>
                <button onClick={() => handleDelete(todo.id)}>X</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
