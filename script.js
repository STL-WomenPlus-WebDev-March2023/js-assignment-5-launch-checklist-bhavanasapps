// Write your JavaScript code here!
window.addEventListener("load", function () {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
      listedPlanets = result;
      console.log(listedPlanets);
   }).then(function () {
      console.log(listedPlanets);
      // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
      let planet = pickPlanet(listedPlanets);
      let name = planet.name;
      let diameter = planet.diameter;
      let star = planet.star;
      let distance = planet.distance;
      let moons = planet.moons;
      let image = planet.image;
      addDestinationInfo(window.document, name, diameter, star, distance, moons, image);
   });



   let form = document.querySelector("form");
   form.addEventListener("submit", function (event) {
      let pilot = document.querySelector("input[name=pilotName]").value;
      let copilot = document.querySelector("input[name=copilotName]").value;
      let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
      let cargoLevel = document.querySelector("input[name=cargoMass]").value;
      let list = document.getElementById("faultyItems");
      event.preventDefault();
      formSubmission(window.document, list, pilot, copilot, fuelLevel, cargoLevel);
   });
});


