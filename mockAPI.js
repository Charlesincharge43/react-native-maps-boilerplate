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

    return [200, [{ coordinate: { latitude: 123, longitude: 123 }, id: 1, name: 'test' },
    { coordinate: { latitude: 124, longitude: 123 }, id: 2, name: 'test' },
    { coordinate: { latitude: 125, longitude: 123 }, id: 3, name: 'test' },
    ]];
  })
export default {};