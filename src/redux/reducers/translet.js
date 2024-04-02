import { createSlice } from "@reduxjs/toolkit"

const langSlice = createSlice({
    name: 'lang',
    initialState: { option: 'uz' },
    reducers: {
        setTranseltRedux: (state, action) => {
            state.option = action.payload
        },
    },
})

export const { setTranseltRedux } = langSlice.actions

export default langSlice.reducer