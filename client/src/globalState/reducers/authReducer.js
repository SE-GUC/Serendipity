//trial yan
import { SET_CURRENT_USER  } from '../actions/actionTypes'
import isEmpty from '../../is-empty';

const initialState = {
    isAuthenticated: false,
    user: {}
}

export default function(state = initialState, action ) {
    switch(action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload
            }
        default: 
            return state;
    }
}
//////////////////////////
// const initialState = {
//     isLoggedIn: false,
//     loggedUser: {}
// }

// export default function(state = initialState, action) {
//         switch(action.type) {
//             case LOGIN: 
//             return {
//                 ...state,
//                 isLoggedIn: true,
//                 loggedUser: action.payload
//             }
//             case LOGOUT: 
//             return {
//                 ...state,
//                 isLoggedIn: false,
//                 loggedUser: {}
//             }
//             default: return state
//         }
// }