export interface IWeather {
  id: number;
  name: string;
  sys: {
    country: string;
  };
}
interface ForecastData {
  dt: number;
  dt_txt: string;
  main: {
    temp: number;
  };
}

export interface WeatherAPIResponse {
  list: ForecastData[];
}

export interface ForecastBlock {
  time: string;
  degree: number;
}
