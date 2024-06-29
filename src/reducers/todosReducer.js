import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [
    {
      id: 1,
      value: "List Item 1",
      active: 'active'
    },
    {
      id: 2,
      value: "List Item 2",
      active: 'complete'
    }
  ],
  filter: 'all'
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    filterTodo: (state, action) => {
      state.filter = action.payload;
    },
    saveTodo:(state,action) => {
        const { id, value, active } = action.payload;
        const existingTodo = state.todos.find(todo => todo.id === id);

        if (existingTodo) {
          existingTodo.value = value;
          existingTodo.active = active;
        }

    }
  },
});

export const { addTodo, removeTodo, filterTodo, saveTodo} = todosSlice.actions;

export default todosSlice.reducer;
