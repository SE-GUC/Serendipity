// authReducer.js

import { SET_CURRENT_USER } from '../actions/actionTypes';
//import isEmpty from '../../../../server/Validations/LoginValid/is-empty';
import isEmpty from '../../is-empty';
const initialState = {
    isAuthenticated: false,
    user: {}
}

export default function (state = initialState, action ) {
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


// import { LOGIN, LOGOUT } from './actionTypes';
// import axios from 'axios';
// import setAuthToken  from '../../helpers/setAuthToken'

// export const logout = () => dispatch => {
// 	dispatch({ type: LOGOUT });
// };

// export const login = (userData) => dispatch => {
// 	dispatch({
// 		type: LOGIN,
// 		payload: {
// 			email:userData.email,
// 			password: userData.password,
// 		},
// 	})
// 	axios.post('http://localhost:5000/api/login/', userData)
	
// 	.then( res => {
// 		const { token } = res.data
// 		localStorage.setItem('jwtToken', token)
// 		setAuthToken(token)
// 		alert('right data')
// 	})
// 	.catch(err => console.log('Invalid User'),alert('Invalid data'),console.log(userData))
	
		
// 	};