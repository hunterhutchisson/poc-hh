import { combineReducers } from "redux";
import dropboxReducer from './dropboxReducer'

// state.sample.-key we're accessing from state
let rootReducer = combineReducers({
    dropbox: dropboxReducer
})

export default rootReducer