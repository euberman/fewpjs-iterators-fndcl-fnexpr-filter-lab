function findMatch(drivers, string){
  drivers.filter(driver => driver === string);
}

function fuzzyMatch(drivers, string){
  drivers.filter(driver => driver.startsWith(string));
}

function matchName(drivers, string){
  drivers.filter( driver => driver.name === string);
}