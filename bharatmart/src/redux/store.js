
import { legacy_createStore,combineReducers,applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import {reducer as cartReducer} from "./Cart/reducer"
import {reducer as productReducer} from "./Product/reducer"
import {reducer as addressReducer} from "./Address/reducer"

const rootReducer = combineReducers({cartReducer,productReducer,addressReducer})



export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))