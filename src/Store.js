import { createSlice, configureStore } from '@reduxjs/toolkit';

// const initialState = createSlice({
//     name: 'auth',
//     initialState: {token: null},
//     reducers: {
//         addToken: (state, action) => {
//             const { payload } = action;
//             state.token = payload;
//         }
//     }
// });

const initialFirstName = createSlice({
    name: 'user',
    initialState: {
        firstName: "",
        lastName: ""
    },
    reducers: {
        addFirstName: (state, action) => {
            const { payload } = action;
            state.firstName = payload
            console.log(payload)
        },
        addLastName: (state, action) => {
            const { payload } = action;
            state.lastName = payload
        }

    }
});

// export const { addToken } = initialState.actions;
export const { addFirstName,addLastName } = initialFirstName.actions;
export const store = configureStore({
    reducer: {
        // auth: initialState.reducer,
        user: initialFirstName.reducer,
    }
});