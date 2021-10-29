import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk';
import repoReducer from "./repoReducer";
import {composeWithDevTools} from "redux-devtools-extension";

const rootReducer = combineReducers({
    repos: repoReducer
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
