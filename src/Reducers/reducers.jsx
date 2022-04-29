import { createSlice } from '@reduxjs/toolkit'
var id=0;
export const toDoSlider = createSlice({
  name: 'toDo',
  initialState: {
    todoList:   [
        
     ]
  },


  reducers: {
    addToDo: (state, action) => {
        var newTodoList = {   
            id: ++id,
            content: action.payload.newContent
        }
        state.todoList.push(newTodoList);
    },
    deleteToDo: (state, action) => {
      var { todoList } = state;
      state.todoList = todoList.filter((item) => item.id !== action.payload.id);
    },
    editTodo: (state, action) => {
      var { todoList } = state;
      state.todoList = todoList.map((item) => item.id === action.payload.id ? action.payload : item);
    }
  },
})


export const { addToDo, deleteToDo, editTodo } = toDoSlider.actions

export default toDoSlider.reducer;