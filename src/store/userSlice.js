import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        users: [
            {username: 'admin', password: 'admin'},
            {username: 'pragya', password: 'pragya'},
        ],
        isAuthenticated: false
    },
    reducers: {
        login: (state, action) => {
          const {userName, password} = action.payload;
          const user = state.users.find((u)=> u.username === userName && u.password === password);
          if(user) {
            state.isAuthenticated = true;
          }
        },
        logout: (state) => {
          state.isAuthenticated = false;
        }
        
    }
})
export const {login, logout} = userSlice.actions;
export default userSlice.reducer;