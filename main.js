
'use strict';

import FareCalc, { STATIONS } from './FareCalc.js';

// Instantiate User:
let card = new FareCalc();

// Card charged with £30
card.setCredit(30);

// enter in the subway
card.enterStation(STATIONS.Holborn);
// set new trip from Tube Holborn to Earl’s Court
card.setNewJourney(STATIONS.EarlsCourt);
// exit station
card.exitStation();

// set bus trip from 328 bus from Earl’s Court to Chelsea
card.setNewBusJourney();

// enter in the subway
card.enterStation(STATIONS.EarlsCourt);
// set new trip
card.setNewJourney(STATIONS.Hammersmith);
// exit station
card.exitStation();

var credit = card.getCredit();
console.log('Remaning Credit: £', credit);