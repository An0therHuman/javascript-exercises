const ftoc = function(tempFahrenheit) {
  let tempF = (tempFahrenheit - 32) * (5/9);
  return Math.round(tempF * 10) / 10;
}

const ctof = function(tempCelsius) {
  let tempC = (tempCelsius * (9/5)) + 32;
  return Math.round(tempC * 10) / 10;
}

module.exports = {
  ftoc,
  ctof
}
