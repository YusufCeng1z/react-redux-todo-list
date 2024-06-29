import { configureStore } from '@reduxjs/toolkit'

import todosReducer from './reducers/todosReducer'
import modalReducer from './reducers/modalReducer'

export const store = configureStore({
  reducer: {
    todosReducer:todosReducer,
    modal:modalReducer
  },
})