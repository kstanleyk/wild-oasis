import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

import { persistedReducer } from "./root-reducer";
import { logger } from "redux-logger";

const initialState = {};

const middlewares: [any] = [thunkMiddleware];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

const middlewareEnhancer = applyMiddleware(...middlewares);

const enhancers = [middlewareEnhancer];
const composedEnhancers = composeWithDevTools(...enhancers);

const store = createStore(persistedReducer, initialState, composedEnhancers);

export default store;
