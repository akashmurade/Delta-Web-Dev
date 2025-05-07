import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id: 1, task: "Learn Redux", isDone: false}],
};

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: nanoid(), 
                task: action.payload,
                isDone: false,
            }
            state.todos.push(newTodo);
        },
        
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => action.payload != todo.id);
        },

        toogleDone: (state, action) => {
            state.todos = state.todos.map((todo) => {
                if(todo.id == action.payload) {
                    todo.isDone = !todo.isDone;
                }
                return todo;
            })
        }
    },

});

export const {addTodo, deleteTodo, toogleDone} = todoSlice.actions;

export default todoSlice.reducer;