import axios from 'axios';

import REST from './restConstants';

// TODO: object, rather than array!

/* -----------  ACTION TYPES ----------- */

const ADD_PLACES_OF_INTEREST = 'ADD_PLACES_OF_INTEREST';
// const GET_DETAIL_FOR_PLACE_OF_INTEREST = 'GET_DETAIL_FOR_PLACE_OF_INTEREST';
const CLEAR_PLACES_OF_INTEREST = 'CLEAR_PLACES_OF_INTEREST';

/* -----------  ACTION CREATORS ----------- */

const addPlacesOfInterest = pois => ({ type: ADD_PLACES_OF_INTEREST, pois });
// const getDetailForPlaceOfInterest = poiDetail => ({ type: GET_DETAIL_FOR_PLACE_OF_INTEREST, poiDetail });
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

export const fetchPOIs = queryParams => dispatch => {
  return axios.get(REST.ENDPNTS.DEFAULT + REST.RES.GETPOIS, {params: queryParams})
    .then(res => dispatch(addPlacesOfInterest(res.data)))
}