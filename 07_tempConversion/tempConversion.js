const convertToCelsius = function(temp) {
  return Math.round((temp - 32.0) * 5.0 / 9.0 * 10.0) / 10.0;
};

const convertToFahrenheit = function(temp) {
  return Math.round(((temp * 9.0 / 5.0) + 32) * 10.0) / 10.0;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
