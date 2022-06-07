// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
    if (distance > 42) {
        return distance - 42;
    } else {
        return 42 - distance;
    }
}

function distanceFromHqInFeet(distanceInFeet) {
    return distanceFromHqInBlocks(distanceInFeet) * 264;
}

function distanceTravelledInFeet(startDestination, finalDestination) {
    let overallDistance;
    if (finalDestination > startDestination) {
        overallDistance = finalDestination - startDestination;
    } else {
        overallDistance = startDestination - finalDestination;
    }
    return overallDistance * 264;
}

function calculatesFarePrice(start, destination) {
    let overallDistance = distanceTravelledInFeet(start, destination);
    let price;
    if (overallDistance <= 400) {
        return price = 0;
    } else if ((overallDistance > 400) && (overallDistance <= 2000)) {
        return price = 2.56;
    } else if ((overallDistance > 2000) && (overallDistance <= 2500)) {
        return price = 25;
    } else {
        return price = `cannot travel that far`
    }

}