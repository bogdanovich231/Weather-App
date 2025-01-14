export interface IWeather {
  id: number;
  name: string;
  sys: {
    country: string;
  };
}
export interface ForecastData {
  dt: number;
  dt_txt: string;
  main: {
    temp: number;
  };
  weather: {
    description: string;
  }[];
}

export interface WeatherAPIResponse {
  list: ForecastData[];
}

export interface ForecastBlock {
  time: string;
  degree: number;
}
