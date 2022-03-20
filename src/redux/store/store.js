import { combineReducers, createStore } from "redux";
import expenseReducer from "../reducers/expenseReducer.js"
import incomeReducer from "../reducers/incomeReducer.js";
import { composeWithDevTools } from "redux-devtools-extension";

const combinedReducer = combineReducers({
    incomeReducer,
    expenseReducer
});
export const store = createStore(combinedReducer, composeWithDevTools());