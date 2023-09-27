import {createStore } from "redux";
import rootReducer from './Redux/reducers/Reducer'

const store = createStore(rootReducer)

export default store;