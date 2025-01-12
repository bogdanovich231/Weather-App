import { ForecastBlock, WeatherAPIResponse } from '../Interfaces/WeatherInterface';

export const getHourlyForecastFromNow = (data: WeatherAPIResponse): ForecastBlock[] => {
  const forecastBlocks: ForecastBlock[] = [];
  const currentTime = new Date();

  if (data && data.list) {
    data.list.forEach((forecast) => {
      const forecastDateTime = new Date(forecast.dt * 1000);

      if (forecastDateTime > currentTime) {
        forecastBlocks.push({
          time: forecastDateTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          degree: Math.round(forecast.main.temp),
        });
      }
    });
  }

  return forecastBlocks.slice(0, 6);
};
