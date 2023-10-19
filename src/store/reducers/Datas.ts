import { ActionType, Action } from "../actions/ActionTypes";

interface Datas {
    dataNasabah: []
}

const initialState = {
    dataNasabah: []
}

// const datasReducer = ((state: Datas = initialState, action: Action)=>{
//     switch(action.type) {
//         case ActionType.IS_LOADING :
//             return {
//                 ...state,
//                 dataNasabah: []
//             }
//     }
// } )