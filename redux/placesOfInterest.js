import axios from 'axios';

import REST from './constants/restConstants';

/* -----------  ACTION TYPES ----------- */

const ADD_PLACES_OF_INTEREST = 'ADD_PLACES_OF_INTEREST';
const SET_PLACES_OF_INTEREST = 'SET_PLACES_OF_INTEREST';
const CLEAR_PLACES_OF_INTEREST = 'CLEAR_PLACES_OF_INTEREST';

/* -----------  ACTION CREATORS ----------- */

const addPlacesOfInterest = pois => ({ type: ADD_PLACES_OF_INTEREST, pois });
const setPlacesOfInterest = pois => ({ type: SET_PLACES_OF_INTEREST, pois });
const clearPlacesOfInterest = () => ({ type: CLEAR_PLACES_OF_INTEREST });

/* -----------  REDUCER ----------- */

export default function reducer(state = [], action) {
  switch (action.type) {
    case ADD_PLACES_OF_INTEREST:
      return state.concat(action.pois);
    case SET_PLACES_OF_INTEREST:
      return action.pois;
    case CLEAR_PLACES_OF_INTEREST:
      return [];
    default:
      return state;
  }
}

/* -----------  THUNK CREATORS ----------- */

export const clearPOIs = () => dispatch => dispatch(clearPlacesOfInterest());

/* customize addPOIs/ setPOIs to whichever thunk below is most suitable for your purposes */

// // mock add/set POIs
export const addPOIs = (queryParams) => dispatch => dispatch(fetchPOIsThenCustomDispatchMock(queryParams, addPlacesOfInterest));
export const setPOIs = (queryParams) => dispatch => dispatch(fetchPOIsThenCustomDispatchMock(queryParams, setPlacesOfInterest));

// // dummy add/set POIs
// export const addPOIs = (queryParams) => dispatch => dispatch(fetchPOIsThenCustomDispatchDummy(queryParams), addPlacesOfInterest);
// export const setPOIs = (queryParams) => dispatch => dispatch(fetchPOIsThenCustomDispatchDummy(queryParams), setPlacesOfInterest);

// // google maps add/set POIs
// export const addPOIs = addPOIsGoogleMapsMaxResults;
// export const setPOIs = setPOIsGoogleMapsMaxResults;

/* SPECIFIC POI THUNKS BELOW */

/* ****** MOCK THUNKS ****** */

// generic fetch mock pois
import { translateMockPOIsResponse } from './utils/dataTranslationUtil';
function fetchPOIsThenCustomDispatchMock(queryParams, actionCreator) {
  return dispatch => {
    return axios.get(REST.ENDPNTS.DEFAULT + REST.RES.GETMOCKPOIS, { params: queryParams })
      .then(translateMockPOIsResponse)
      .then(pois => dispatch(actionCreator(pois)));
  }
}

/* ****** DUMMY DATA THUNKS ****** */
import { dummyPois } from './utils/dataTranslationUtil';

// generic fetch dummy pois
function fetchPOIsThenCustomDispatchDummy(queryParams, actionCreator) {
  return dispatch => {
    return new Promise(resolve => {
      setTimeout(() => resolve(), 500)
    })
      // .then(() => {throw new Error('Test Error')})
      .then(() => dummyPois)
      .then(pois => dispatch(actionCreator(pois)));
  }
}

/* ****** GOOGLE MAPS THUNKS ****** */

function setPOIsGoogleMapsMaxResults(queryParams){
  return dispatch => {
    dispatch(clearPOIs());
    return dispatch(fetchPOIsGoogleMapsMoreResults(queryParams, 3));
  }
}

function addPOIsGoogleMapsMaxResults(queryParams){
  return dispatch => {
    return dispatch(fetchPOIsGoogleMapsMoreResults(queryParams, 3));
  }
}

/* recursive dispatch function for fetching the next google search result page */
function fetchPOIsGoogleMapsMoreResults(queryParams, count) {
  return dispatch => {
    return dispatch(fetchPOIsThenCustomDispatchGoogleMaps(queryParams, addPlacesOfInterest))
      .then(nextToken => {
        if (count <= 1) {
          return null;
        } else {
          const nextQueryParams = Object.assign(queryParams, { pagetoken: nextToken });
          return promisifiedTimeOut(1100)
            .then(() => {
              return dispatch(fetchPOIsGoogleMapsMoreResults(nextQueryParams, count - 1));
            })
          // ^  note you MUST wait a period of time before each new request for another google (next page) search
          // or you will get an INVALID_REQUEST error!
        }
      })
  }
}

// Reminder you need to set your APIKEY before you can dispatch this thunk
import { handleGoogleMapsAPIResponse, translateGoogleMapsNearbySearchResponse, createConvertedQueryParams } from './utils/dataTranslationUtil';
function fetchPOIsThenCustomDispatchGoogleMaps(queryParams, actionCreator) {
  return dispatch => {
    // Feel free to add a "type" property to queryParams below for more specific nearby searches (e.g., type : 'restaurant')
    const convertedQueryParams = createConvertedQueryParams(queryParams, REST.APIKEY.GOOGLEMAPS);
    // console.log('convertedQueryParams: ');
    // console.log(convertedQueryParams);
    // console.log(REST.ENDPNTS.GOOGLEMAPSAPI + REST.RES.GETGOOGLEMAPSPOIS)
    return axios.get(REST.ENDPNTS.GOOGLEMAPSAPI + REST.RES.GETGOOGLEMAPSPOIS, { params: convertedQueryParams })
      .then(handleGoogleMapsAPIResponse)
      .then(translateGoogleMapsNearbySearchResponse)
      .then(translated => {
        dispatch(actionCreator(translated.pois));
        return translated.next_page_token;
        // ^ This will give you the option to query the next 2 pages of google maps nearby search results
        // just .then off this dispatch and the token will be the resolved value that gets passed to the success cb
        // see `fetchPOIsGoogleMapsMoreResults` for how to do this
      });
  }
}

function promisifiedTimeOut(ms){
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  })
}