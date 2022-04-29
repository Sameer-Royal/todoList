import { configureStore } from '@reduxjs/toolkit';
import toDoReducer from './reducers';

export default configureStore({
  reducer: {
      toDo: toDoReducer
  },
})