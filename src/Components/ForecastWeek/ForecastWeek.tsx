import { useParams } from 'react-router-dom';
import { useGetForecastQuery } from '../../store/api/api';
import styles from './ForecastWeek.module.css';
import ForecastWeekBlock from './ForecastWeekBlock';
import Loader from '../Loader/Loader';
import { ForecastData } from '../../utils/Interfaces/WeatherInterface';
import WeatherIcon from '../WeatherIcon/WeatherIcon';

function ForecastWeek() {
  const { city } = useParams();
  const { data: forecast, isLoading, error } = useGetForecastQuery(city || '');

  if (isLoading) {
    return <Loader />;
  }

  if (error || !forecast) {
    return <p>Unable to load 5-day forecast. Please try again later.</p>;
  }

  const dailyForecast: ForecastData[] = [];
  let lastDate: string | null = null;

  forecast.list.forEach((item: ForecastData) => {
    const day = item.dt_txt.split(' ')[0];
    if (day !== lastDate) {
      lastDate = day;
      dailyForecast.push(item);
    }
    if (dailyForecast.length === 5) return;
  });

  return (
    <div className={styles.containerForecastWeek}>
      <h4>5-day Forecast</h4>
      <div className={styles.wrapperForecastToday}>
        {dailyForecast.map((day, index) => {
          const weatherDescription = day.weather[0].description;
          const weatherIcon = WeatherIcon(weatherDescription);

          return (
            <ForecastWeekBlock
              key={index}
              day={day.dt_txt}
              degree={Math.round(day.main.temp)}
              description={weatherDescription}
              icon={weatherIcon}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ForecastWeek;
