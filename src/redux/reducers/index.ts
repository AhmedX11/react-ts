import { combineReducers } from "redux";
import repoReducer from "./repositoriesReducer";


const reducers = combineReducers({
    repositories: repoReducer
})

export default reducers;