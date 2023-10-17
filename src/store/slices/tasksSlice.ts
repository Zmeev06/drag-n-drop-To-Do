import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ITask } from '../../interfaces/variableInterfaces'
import { RootState } from '..'

interface DataState {
  value: ITask[]
}

const initialState: DataState = {
  value: localStorage.getItem('tasks')
    ? JSON.parse(localStorage.getItem('tasks') || '{}')
    : [],
}

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITask>) => {
      state.value.unshift({
        id: action.payload.id,
        title: action.payload.title,
        projectId: action.payload.projectId,
        status: action.payload.status,
      })
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      state.value = state.value.filter((e) => e.id !== action.payload)
    },
    editTask: (state, action: PayloadAction<ITask>) => {
      state.value = state.value.map((e) =>
        e.id === action.payload.id ? { ...e, title: action.payload.title } : e,
      )
    },
    dragTaskOnBoard: (state, action: PayloadAction<any>) => {
      if (!action.payload.destination) return
      const { source, destination } = action.payload

      if (source.index === destination.index) return

      const newTasks = [...state.value]
      const [removedTask] = newTasks.splice(source.index, 1)
      newTasks.splice(destination.index, 0, removedTask)
      state.value = newTasks
    },
  },
})

export const { addTask, deleteTask, editTask, dragTaskOnBoard } =
  tasksSlice.actions

export const selecttasks = (state: RootState) => state.tasks.value

export default tasksSlice.reducer
