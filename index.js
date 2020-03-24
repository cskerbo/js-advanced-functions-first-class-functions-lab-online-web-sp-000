const returnFirstTwoDrivers = function(a){
  return [a[0], a[1]];
}

const returnLastTwoDrivers = function(a) {
  return a.slice(Math.max(a.length - 2))
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]