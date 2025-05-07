import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

export default function AddForm() {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  let handleChange = (event) => {
    setTask(event.target.value);
  };

  let submitHandler = (event) => {
    event.preventDefault();
    dispatch(addTodo(task));
    setTask("");
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="task to do"
          value={task}
          onChange={handleChange}
        />
        <input type="submit" value="Add" />
      </form>
    </>
  );
}
