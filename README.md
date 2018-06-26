This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app).

## React Native Maps Boilerplate

This project is intended to make it easier for others to create their own react-native-maps application.

Currently a work in progress, but feel free to use any of what I have so far if it helps :)

## Basic Features

* Barebones stateful login screen connected to react redux (submission will dispatch a thunk that will call
a mocked API)
* A map screen connected to a geolocation hoc that centers the map to the user's current location (continuously) by default
* Map screen also calls a mocked API for places of interest (POI), and renders them as markers
* A side menu (reachable via hamburger) for navigating to other screens
* Some other features not listed (this list will be updated as this project evolves)

## Installation

#### `yarn install`
#### `yarn start`

ez pz :D

(for more detailed instructions on react native setup, please refer to the
[Create React Native App ReadMe](https://github.com/react-community/create-react-native-app/blob/master/README.md))

## Additional Notes

This application is only tested for ios.

## Pending Items

* tests
* stylesheets refactor
* workaround for react native bug: onpress invoked for multiple markers that are too close together (maybe cluster them into one in those scenarios?)
* search bar component
* implement better way to update map (see MapContainer.js notes)
* better readme.md