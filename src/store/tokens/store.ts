import { tokensReducer } from "./tokensReducer";
import {legacy_createStore as createStore} from 'redux'

const store = createStore(tokensReducer)

export default store
