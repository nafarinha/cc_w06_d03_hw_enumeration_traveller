const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map( (journey) => journey.startLocation
  );
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map( (journey) => journey.endLocation
  );
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter( journey => journey.transport === transport )
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter( journey => journey.distance > minDistance )
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  let totalDistanceTravelled = this.journeys.reduce( (runningTotal, journey, initialValue) => runningTotal + journey.distance,0 );
  return totalDistanceTravelled;
};

//Based on https://stackoverflow.com/a/14438954/5621295
Traveller.prototype.getUniqueModesOfTransport = function () {
  modesOfTransportMap = this.journeys.map( journey => journey.transport);
  return modesOfTransportMap.filter( (transport, index, map) => map.indexOf(transport) === index  );
};


module.exports = Traveller;
