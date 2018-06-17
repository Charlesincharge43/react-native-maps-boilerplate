import axios from 'axios';

import REST from './restConstants';

/* -----------  ACTION TYPES ----------- */

const SET_AUTHENTICATED_USER = 'SET_AUTHENTICATED_USER';

/* -----------  ACTION CREATORS ----------- */

const setAuthenticatedUser = user => ({type: SET_AUTHENTICATED_USER, user});

/* -----------  REDUCER ----------- */

export default function reducer(state = null, action){
  switch(action.type){
    case SET_AUTHENTICATED_USER:
      return action.user
    default:
      return state;
  }
}

/* -----------  THUNK CREATORS ----------- */

export const signin = credentials => dispatch => {
  return axios.post(REST.ENDPNTS.DEFAULT + REST.RES.SIGNIN, credentials)
    .then(res => dispatch(setAuthenticatedUser(res.data)))
}