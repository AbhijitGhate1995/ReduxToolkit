import {createSlice } from "@reduxjs/toolkit";

 const userSlices = createSlice({
    name:"user",
    initialState:[],
    reducers:{
        addUser(state,action){},
        removeUser(state,action){},
        deleteusers(state,action){},

    }
 })
 export default userSlices;