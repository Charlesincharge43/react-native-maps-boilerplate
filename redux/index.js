import { combineReducers } from 'redux';
import auth from './auth';
import placesOfInterest from './placesOfInterest';

export default combineReducers({auth, placesOfInterest});