

/* ENDPOINTS */
const EMPTYSTR = '';
const LOCALEXPRESS = 'http://localhost:3000';

/* PREFIX */
const PREFIX = '/api';

/* RESOURCES */
const SIGNIN = PREFIX + '/signin';

const REST = {
  ENDPNTS: {
    /* This `DEFAULT` property is what you will be swapping in most cases */
    DEFAULT: EMPTYSTR,

    LOCALEXPRESS: LOCALEXPRESS,
    EMPTYSTR: EMPTYSTR,
  },
  RES: {
    SIGNIN: SIGNIN,
  }
}

export default REST;
