// Code your solution in this file!

const returnFirstTwoDrivers = function (names){
    const result = names.slice(0,2);
    return result;
  }
const returnLastTwoDrivers = function (names){
    const result = names.slice(-2);
    return result;
}

const selectingDrivers = ([returnFirstTwoDrivers,returnLastTwoDrivers]);

function createFareMultiplier(integer){
    
    return function (fare) { return integer * fare};
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers (drivers, returnDrivers){
     if (returnDrivers == returnFirstTwoDrivers){
        return returnFirstTwoDrivers(drivers);
     }else if (returnDrivers == returnLastTwoDrivers){
        return returnLastTwoDrivers(drivers);
     }
    

}
