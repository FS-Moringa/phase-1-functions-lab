// Code your solution in this file!
let scuberOffices = 42;
function distanceFromHqInBlocks(pickup) {
  let blocks = Math.abs(pickup - scuberOffices);
  return blocks;
  
  
}

distanceFromHqInBlocks(43);
distanceFromHqInBlocks(50);
distanceFromHqInBlocks(42);

function distanceFromHqInFeet(pickUpLocation) {
  let distanceInFeet = distanceFromHqInBlocks(pickUpLocation) * 264;
  return distanceInFeet;
}

distanceFromHqInFeet(43);

function distanceTravelledInFeet(start,destination) {
  let result = Math.abs(destination - start) * 264;
  return result
}

distanceTravelledInFeet(43);
distanceTravelledInFeet(50);



function calculatesFarePrice(start,destination) {
  let cost = (distanceTravelledInFeet(start,destination) - 400) * 2
  let distanceCovered = distanceTravelledInFeet(start,destination);
  let actualFare;

  if(distanceCovered >= 2500) {
    actualFare = "cannot travel that far";

  } else if(distanceCovered > 2000) {
    actualFare = 25;
  }else if(distanceCovered >= 400) {
    actualFare = cost/100 
  } else {
    actualFare = 0
  }

  return actualFare
}














