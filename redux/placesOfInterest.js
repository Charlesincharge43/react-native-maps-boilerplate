import axios from 'axios';

import REST from './constants/restConstants';

/* -----------  ACTION TYPES ----------- */

const ADD_PLACES_OF_INTEREST = 'ADD_PLACES_OF_INTEREST';
const CLEAR_PLACES_OF_INTEREST = 'CLEAR_PLACES_OF_INTEREST';

/* -----------  ACTION CREATORS ----------- */

const addPlacesOfInterest = pois => ({ type: ADD_PLACES_OF_INTEREST, pois });
const clearPlacesOfInterest = () => ({ type: CLEAR_PLACES_OF_INTEREST });

/* -----------  REDUCER ----------- */

export default function reducer(state = [], action) {
  switch (action.type) {
    case ADD_PLACES_OF_INTEREST:
      return state.concat(action.pois);
    case CLEAR_PLACES_OF_INTEREST:
      return [];
    default:
      return state;
  }
}

/* -----------  THUNK CREATORS ----------- */

export const clearPOIs = () => dispatch => dispatch(clearPlacesOfInterest());

// mock pois
// export const fetchPOIs = queryParams => dispatch => {
//   return axios.get(REST.ENDPNTS.DEFAULT + REST.RES.GETMOCKPOIS, {params: queryParams})
//     .then(res => dispatch(addPlacesOfInterest(res.data)))
// }

// google maps pois
import { handleGoogleMapsAPIResponse } from './utils/googleApiUtil';
export const fetchPOIs = queryParams => dispatch => {
  console.log('queryparams?')
  console.log(queryParams)
  console.log('rest call? ')
  console.log(REST.ENDPNTS.GOOGLEMAPSAPI + REST.RES.GETGOOGLEMAPSPOIS)
  return axios.get(REST.ENDPNTS.GOOGLEMAPSAPI + REST.RES.GETGOOGLEMAPSPOIS, {params: queryParams})
    .then(handleGoogleMapsAPIResponse)
    .then(res => dispatch(addPlacesOfInterest(res.data)))
}