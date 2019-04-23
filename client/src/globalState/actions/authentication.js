// authentication.js

import axios from 'axios';
import { GET_ERRORS, SET_CURRENT_USER } from '../actions/actionTypes';
import setAuthToken from '../../helpers/setAuthToken';
import jwt_decode from 'jwt-decode';

// export const registerUser = (user, history) => dispatch => {
//     axios.post('/api/users/register', user)
//             .then(res => history.push('/login'))
//             .catch(err => {
//                 dispatch({
//                     type: GET_ERRORS,
//                     payload: err.response.data
//                 });
//             });
//}

//not working!!
export const loginUser = (user) => dispatch => {
    axios.post('http://localhost:5000/api/login', user)
            .then(res => {
                const { token } = res.data;
                localStorage.setItem('jwtToken', token);
                setAuthToken(token);
                const decoded = jwt_decode(token);
                dispatch(setCurrentUser(decoded));
            })
            .catch(err => {
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                });
            });
}
//
// const spinnerStyle={
//   //background:'#193E43',
//   width: '5rem',
//   height: '5rem',
//   color:'#e5e8e8',
//   textAlign:'center',
//   fontFamily:'ariel',
//   padding:'10px'
// }
//
export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
}

export const logoutUser = (history) => dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthToken(false);
    dispatch(setCurrentUser({}));
    this.props.history.push('/login');
}