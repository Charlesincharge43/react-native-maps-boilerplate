
export const handleGoogleMapsAPIResponse = (res) => {
  // console.log('handling response')
  // console.log(res)
  if (res.data.error_message) {
    console.error(res.data.error_message);
    throw new Error(res.data.error_message);
  } else if (!(res.data.status === 'ZERO_RESULTS' || res.data.status === 'OK')){
    console.error(res.data.status);
    throw new Error(res.data.status);
  }
  return res;
}

export const translateGoogleMapsNearbySearchResponse = (res) => {
  // console.log('translating')
  // console.log(res);
  const pois = res.data.results.map(place => {
    return {
      coordinate: {
        latitude: place.geometry.location.lat,
        longitude: place.geometry.location.lng,
      },
      identifier: place.id,
      title: place.name,
    }
  })
  const next_page_token = res.data.next_page_token;
  return { pois, next_page_token };
}

export const translateMockPOIsResponse = (res) =>
  res.data.map(place => {
    return {
      coordinate: place.coordinate,
      identifier: place.id + '',
      title: place.name,
    }
  })

// for google maps
export const createConvertedQueryParams = (queryParams, key) => {
  return {
    location: `${queryParams.latitude},${queryParams.longitude}`,
    radius: queryParams.latitudeDelta * 40008000 / 720,
    type: queryParams.type,
    pagetoken: queryParams.pagetoken,
    key,
  }
}

/* Reminder that if you are going to render these markers on the map, you should set your simulator's location
accordingly if you want to see them */
export const dummyPois = [
     {
      "coordinate": {
        "latitude": 37.32749399999999,
        "longitude": -122.013887,
      },
      "identifier": "92d1b79e0ee8ea1fe1ebc71e749553aad4d873e9",
      "title": "Benihana",
    },
    {
      "coordinate": {
        "latitude": 37.3224196,
        "longitude": -122.017592,
      },
      "identifier": "b903692d16c81c49481e84f79c96d540ef5d39b3",
      "title": "Merlion Restaurant & Bar",
    },
    {
      "coordinate": {
        "latitude": 37.326911,
        "longitude": -122.013857,
      },
      "identifier": "a1984775bc70ff639f283dba51fb58218b4cdc05",
      "title": "Bowlmor Cupertino",
    },
    {
      "coordinate": {
        "latitude": 37.3224672,
        "longitude": -122.0222304,
      },
      "identifier": "7a55bff93e1b253aa56be4c20a483824c21f20a9",
      "title": "Arya Global Cuisine",
    },
    {
      "coordinate": {
        "latitude": 37.323694,
        "longitude": -122.018899,
      },
      "identifier": "7ae8f9208343c506bacbb18de6a3e7017de7c749",
      "title": "Chuck E. Cheese's",
    },
    {
      "coordinate": {
        "latitude": 37.32322259999999,
        "longitude": -122.0123426,
      },
      "identifier": "398d00f1a81248f0acee6ce202eb266e4dec0b4c",
      "title": "Cafe Lattea",
    },
    {
      "coordinate": {
        "latitude": 37.32328359999999,
        "longitude": -122.0199483,
      },
      "identifier": "8335866994f0c1fef5b7ccd7aebcd3832a5e9333",
      "title": "Yoshinoya Cupertino",
    },
    {
      "coordinate": {
        "latitude": 37.32334379999999,
        "longitude": -122.0235672,
      },
      "identifier": "729790fa4ecb8a3bc61f94ae5463ea8cfd23e7b9",
      "title": "Shan Restaurant",
    },
    {
      "coordinate": {
        "latitude": 37.3219309,
        "longitude": -122.0170511,
      },
      "identifier": "a0e5838b367bcb56832c9db9b620596ec6f0fa71",
      "title": "Erik's DeliCafé",
    },
    {
      "coordinate": {
        "latitude": 37.3225291,
        "longitude": -122.0176688,
      },
      "identifier": "33e456c82e727a7f9868734b07b4027723ea1058",
      "title": "Kong Tofu and BBQ Korean Cuisine",
    },
    {
      "coordinate": {
        "latitude": 37.3219983,
        "longitude": -122.0169684,
      },
      "identifier": "6bc5475b3b128fb4bfbbd2ee5bedfd51420d84ee",
      "title": "One Pot Shabu Shabu",
    },
    {
      "coordinate": {
        "latitude": 37.32265499999999,
        "longitude": -122.015934,
      },
      "identifier": "2b76222ebaac7e6918aa65b115df4276135d4c35",
      "title": "House of Falafel",
    },
    {
      "coordinate": {
        "latitude": 37.3225598,
        "longitude": -122.0168048,
      },
      "identifier": "54d8d0ce25caf23dbebf1cc16d28e17cb1f536e5",
      "title": "Gyu-Kaku Japanese BBQ",
    },
    {
      "coordinate": {
        "latitude": 37.3218556,
        "longitude": -122.018913,
      },
      "identifier": "af13c521a5ec2a62fff254c427526dab4d90663d",
      "title": "Harumi Sushi",
    },
    {
      "coordinate": {
        "latitude": 37.322093,
        "longitude": -122.0148731,
      },
      "identifier": "4a052d245028bf4eb0b1b7189e3fa105c9fafa86",
      "title": "Red Hot Wok 好客棧",
    },
    {
      "coordinate": {
        "latitude": 37.3238843,
        "longitude": -122.0176205,
      },
      "identifier": "3e3e947240489d71294ae4b6b043432c8ad7fcac",
      "title": "Azuma Japanese Cuisine",
    },
    {
      "coordinate": {
        "latitude": 37.322264,
        "longitude": -122.019334,
      },
      "identifier": "a9ea44e0da6ebc2c5e381506c9d75e42d165150e",
      "title": "Liang's Village Cupertino",
    },
    {
      "coordinate": {
        "latitude": 37.3216289,
        "longitude": -122.017469,
      },
      "identifier": "1fed0f2319b594b4731d3b39f20b435d8e870314",
      "title": "Olarn Thai Cuisine",
    },
    {
      "coordinate": {
        "latitude": 37.3217503,
        "longitude": -122.018154,
      },
      "identifier": "edae2af0e013e2a53c33de98d35a7976d27cb4a6",
      "title": "Aloha Fresh",
    },
    {
      "coordinate": {
        "latitude": 37.3223393,
        "longitude": -122.0167368,
      },
      "identifier": "8624991f3f64f6e0440b3e7011f706b7417ff83c",
      "title": "Super Cue Cafe",
    },
  ]