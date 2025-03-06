const pickup = 42
function distanceFromHqInBlocks(somevalue) {
    return Math.abs (somevalue - pickup)
}
 
const feet = 264
function distanceFromHqInFeet (somevalue) {
    distanceFromHqInBlocks(somevalue)
return distanceFromHqInBlocks(somevalue) * feet
}

let destination
let start
function distanceTravelledInFeet(start, destination) {
    return Math.abs (destination - start) * feet
}

function calculatesFarePrice(start, destination) {
    const feetPerBlock = 264; // 1 block = 264 feet
    let distance = Math.abs(destination - start) * feetPerBlock;

    if (distance <= 400) {
        return 0; // First 400 feet are free
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02; // 2 cents per foot after the first 400 feet
    } else if (distance > 2000 && distance <= 2500) {
        return 25; // Flat fare of $25
    } else {
        return 'cannot travel that far'; // Over 2500 feet is not allowed
    }
}

