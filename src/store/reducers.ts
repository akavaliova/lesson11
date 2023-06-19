import { createSlice } from "@reduxjs/toolkit";
import { AnyAction, combineReducers } from "redux";

const cashDefaultState = {
  cash: 0,
};

export const cashSlice = createSlice({
  name: "cash",
  initialState: cashDefaultState,
  reducers: {
    addCash: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.cash = action.payload;
    },
  },
});

export const cashReducer = cashSlice.reducer;
export const { addCash } = cashSlice.actions;

const nickDefaultState = {
  username: "nickname",
};

const usersDefaultState = {
  users: [],
};

const nickReducer = (state = nickDefaultState, action: AnyAction) => {
  switch (action.type) {
    case "CHANGE_NICKNAME":
      return { ...state, username: action.payload };
    default:
      return state;
  }
};

const usersReducer = (state = usersDefaultState, action: AnyAction) => {
  switch (action.type) {
    case "ADD_USER":
      return { ...state, users: [...state.users, action.payload] };
    case "REMOVE_USER":
      return {
        ...state,
        users: state.users.filter((user: string) => user !== action.payload),
      };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  nick: nickReducer,
  users: usersReducer,
});
