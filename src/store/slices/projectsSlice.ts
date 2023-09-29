import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProject } from '../../interfaces/serviceInterfaces'
import { RootState } from '..'

interface DataState {
  value: IProject[]
}

const initialState: DataState = {
  value: localStorage.getItem('projects')
    ? JSON.parse(localStorage.getItem('projects') || '{}')
    : [],
}

export const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    addProject: (state, action: PayloadAction<IProject>) => {
      state.value.unshift({
        id: action.payload.id,
        title: action.payload.title,
      })
    },
    deleteProject: (state, action: PayloadAction<number>) => {
      state.value = state.value.filter((e) => e.id !== action.payload)
    },
    editProject: (state, action: PayloadAction<IProject>) => {
      state.value = state.value.map((e) =>
        e.id === action.payload.id ? { ...e, title: action.payload.title } : e,
      )
    },
  },
})

export const { addProject, deleteProject, editProject } = projectsSlice.actions

export const selectProjects = (state: RootState) => state.projects.value

export default projectsSlice.reducer
