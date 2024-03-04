import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

export const taskSlice = createSlice({
  name: "Tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },

    deleteTask: (state, action) => {
      const removeTask = state.tasks.filter(
        (data) => data.id !== action.payload
      );
      state.tasks = removeTask;
    },

    completedTask: (state, action) => {
      state.tasks = action.payload;
    },

    deleteAll: (state, action) => {
      const filteredTasks = state.tasks.filter(
        (task) => !action.payload.includes(task.id)
      );

      state.tasks = filteredTasks;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTask, deleteTask, completedTask, deleteAll } =
  taskSlice.actions;

export default taskSlice.reducer;
