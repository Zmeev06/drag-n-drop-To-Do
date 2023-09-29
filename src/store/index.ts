import { configureStore } from '@reduxjs/toolkit'
import paginateReduser from './slices/paginateSlice'
import projectsReduser from './slices/projectsSlice'

export const store = configureStore({
  reducer: {
    paginate: paginateReduser,
    projects: projectsReduser,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
