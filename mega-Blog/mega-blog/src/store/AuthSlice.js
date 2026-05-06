import { createSlice } from "@reduxjs/toolkit";

const initialState={
    status:false,
    userData:null
}

const AuthSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        Login:(state,action)=>{
            state.status=true;
            state.userData=action.payload;
        },
        Logout:(state)=>{
            state.status=false;
            state.userData=null;
        }
    }
})

export const {Login,Logout}=AuthSlice.actions;
export default AuthSlice.reducer;