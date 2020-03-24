const returnFirstTwoDrivers = function(a){
  return [a[0], a[1]];
}

const returnLastTwoDrivers = function(a) {
  a.slice(Math.max(a.length - 2))
}
