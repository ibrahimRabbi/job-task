import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    value : 'rabbi'
}

const fastSlice = createSlice({
    name: 'fastslice',
    initialState,
    reducers: {
        
    }
})

export default fastSlice.reducer