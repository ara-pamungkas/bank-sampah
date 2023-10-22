import { combineReducers } from "redux";
import regisNasabahReducer from "./regisNasabah/reduceRegister";

const rootReducer = combineReducers({
    register : regisNasabahReducer
})

export default rootReducer
export type RootState = ReturnType<typeof rootReducer>