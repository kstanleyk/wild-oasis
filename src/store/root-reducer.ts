import { Action, combineReducers } from "redux";
import { ThunkAction } from "redux-thunk";
import { oasisReducers } from "./oasis";
import sessionStorage from "redux-persist/lib/storage/session";
import { persistReducer } from "redux-persist";

export const rootReducer = combineReducers({
  ...oasisReducers,
});

export const persistConfig = {
  key: "root",
  storage: sessionStorage,
  whitelist: [
    "cabin",
  ],
  blacklist: [],
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);

export type rootState = ReturnType<typeof rootReducer>;

export type appThunk = ThunkAction<void, rootState, unknown, Action<string>>;
