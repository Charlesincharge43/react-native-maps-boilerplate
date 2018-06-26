

/* ENDPOINTS */
const EMPTYSTR = '';
const LOCALEXPRESS = 'http://localhost:3000';
const GOOGLEMAPSAPI = 'https://maps.googleapis.com';

/* PREFIX */
const PREFIX = '/api';
const MAPS_API_PREFIX = '/maps/api';

/* RESOURCES */
const SIGNIN = PREFIX + '/signin';
const GETMOCKPOIS = PREFIX + '/placesOfInterest';
const GOOGLEMAPS_NEARBY_SEARCH_JSON = MAPS_API_PREFIX + '/place/nearbysearch/json';
const GOOGLEMAPS_NEARBY_SEARCH_XML = MAPS_API_PREFIX + '/place/nearbysearch/xml';
/* API KEYS */
const GOOGLEMAPS_API_KEY = 'ENTERKEYHERE!!';

// ^ if you want to test google maps API, you'll need to fill in the google maps js API key above
// see https://developers.google.com/maps/documentation/javascript/get-api-key for more details



const REST = {
  ENDPNTS: {
    /* This `DEFAULT` property is what you will be swapping in most cases */
    DEFAULT: EMPTYSTR,

    LOCALEXPRESS: LOCALEXPRESS,
    EMPTYSTR: EMPTYSTR,
    GOOGLEMAPSAPI: GOOGLEMAPSAPI,
  },
  RES: {
    SIGNIN: SIGNIN,

    GETMOCKPOIS: GETMOCKPOIS,
    GETGOOGLEMAPSPOIS: GOOGLEMAPS_NEARBY_SEARCH_JSON,
  },
  APIKEY: {
    GOOGLEMAPS: GOOGLEMAPS_API_KEY
  }
}

export default REST;
