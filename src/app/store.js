import { applyMiddleware, combineReducers, compose } from "redux";
import counterReducer from "./feture/counter/reducer";
import { legacy_createStore as createStore} from 'redux'
import thunk from "redux-thunk";

let rootReducers = combineReducers({

    counter: counterReducer


});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(rootReducers , composeEnhancers(applyMiddleware(thunk)));
export default store;