import { combineReducers } from "redux";
import { authReducer } from "./auth/authReducer";
import { projectReducer } from "./project/projectReducer";

export const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer
})