import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import REST from './redux/restConstants';

const mock = new MockAdapter(axios);


/* SIGNIN */

// To mock "unauthorized" response
// mock.onPost(REST.ENDPNTS.DEFAULT + REST.RES.SIGNIN)
//   .reply(401);

// To mock "500 internal server error" response
// mock.onPost(REST.ENDPNTS.DEFAULT + REST.RES.SIGNIN)
//   .reply(500);

// To mock successful login
mock.onPost(REST.ENDPNTS.DEFAULT + REST.RES.SIGNIN)
  .reply(config => {
    // console.log(config);
    const requestBody = JSON.parse(config.data);
    // console.log(requestBody)

    return [200, { user: { name: 'TestUser-' + requestBody.username, preferences: {} } }];
  })

  
/* fetchPOI */

mock.onGet(REST.ENDPNTS.DEFAULT + REST.RES.GETPOIS)
  .reply(config => {
    // console.log(config)
    // const requestParams = config.params;
    // console.log(requestParams)

    return [200, [{ coordinate: { latitude: 37.335523, longitude: -122.032455 }, id: 1, name: 'test1' },
    { coordinate: { latitude: 37.335525, longitude: -122.033458 }, id: 2, name: 'test2' },
    { coordinate: { latitude: 37.335527, longitude: -122.034461 }, id: 3, name: 'test3' },
    ]];
  })
export default {};