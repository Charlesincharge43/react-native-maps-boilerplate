import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import REST from './redux/restConstants';

const mock = new MockAdapter(axios);


/* SIGNIN */

// mock.onPost(REST.ENDPNTS.DEFAULT + REST.RES.SIGNIN)
//   .reply(401);

// mock.onPost(REST.ENDPNTS.DEFAULT + REST.RES.SIGNIN)
//   .reply(500);

mock.onPost(REST.ENDPNTS.DEFAULT + REST.RES.SIGNIN)
  .reply(config => {
    // console.log(config);
    const request = JSON.parse(config.data);
    // console.log(request)

    return [200, {user: {name: 'TestUser-' + request.username, preferences: {} } }]
  })

export default {};