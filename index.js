// Code your solution in this file!

function distanceFromHqInBlocks(customersBlock){;
    const scubersBlock = 42;
    if (customersBlock>scubersBlock){
        return customersBlock - scubersBlock;
    }
    else {
        return scubersBlock - customersBlock;
    }

}

// distanceFromHqInBlocks()


function distanceFromHqInFeet(customersBlock){
    let blocks = distanceFromHqInBlocks(customersBlock);   
    return  blocks * 264;
}

// distanceFromHqInFeet ()

function distanceTravelledInFeet (start, destination){
    if (start>destination){
        return (start - destination) * 264;
    }
    else {
        return (destination-start) * 264;
    }
}

// distanceTravelledInFeet()

function calculatesFarePrice(start,destination){
    let distance = distanceTravelledInFeet(start, destination);
    let fareDistance = distanceTravelledInFeet (start, destination) - 400
    if (distance <= 400){
        return 0;
    }
    else if (distance > 400 && distance <= 2000 ) {
        return fareDistance * 0.02
    }
    else if (distance > 2000 && distance <= 2500) {
        return 25
    }
    else
    return 'cannot travel that far'


}

calculatesFarePrice()

