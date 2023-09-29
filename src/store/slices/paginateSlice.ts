import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '..'

export const paginateSlice = createSlice({
  name: 'paginate',
  initialState: {
    value: 1,
  },
  reducers: {
    next: (state) => {
      state.value += 1
    },
    prev: (state) => {
      state.value -= 1
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.value = action.payload
    },
  },
})

export const { next, prev, setPage } = paginateSlice.actions

export const selectPaginate = (state: RootState) => state.paginate.value

export default paginateSlice.reducer
