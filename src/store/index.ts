import { configureStore } from '@reduxjs/toolkit'
import paginateReduser from './slices/paginateSlice'
import projectsReduser from './slices/projectsSlice'
import tasksReducer from './slices/tasksSlice'

export const store = configureStore({
  reducer: {
    paginate: paginateReduser,
    projects: projectsReduser,
    tasks: tasksReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
