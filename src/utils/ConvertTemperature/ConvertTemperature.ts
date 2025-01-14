export const convertTemperature = (temp: number | undefined, temperatureUnit: string) => {
  if (temp === undefined) return 'No data';
  if (temperatureUnit === 'Celsius') {
    return `${Math.round(temp)}°C`;
  } else if (temperatureUnit === 'Fahrenheit') {
    return `${Math.round((temp * 9) / 5 + 32)}°F`;
  } else if (temperatureUnit === 'Kelvin') {
    return `${Math.round(temp + 273.15)}K`;
  }
  return 'No data';
};
