import { useSelector } from 'react-redux';
import { useGetForecastQuery } from '../../store/api/api';
import { RootState } from '../../store/store';
import { getHourlyForecastFromNow } from '../../utils/ForecastForToday/ForecastForToday';
import Loader from '../Loader/Loader';
import WeatherIcon from '../WeatherIcon/WeatherIcon';
import styles from './ForecastToday.module.css';
import ForecastTodayBlock from './ForecastTodayBlock';
import { convertTemperature } from '../../utils/ConvertTemperature/ConvertTemperature';

interface ForecastTodayProps {
  city: string;
}

function ForecastToday({ city }: ForecastTodayProps) {
  const { data, isLoading } = useGetForecastQuery(city);
  const temperatureUnit = useSelector((state: RootState) => state.temperature.unit);

  if (isLoading) {
    return <Loader />;
  }

  const hourlyForecast = getHourlyForecastFromNow(data);

  return (
    <div className={styles.containerForecastToday}>
      <h4>Today's forecast</h4>
      <div className={styles.wrapperForecastToday}>
        {hourlyForecast.map((forecast, index) => (
          <ForecastTodayBlock
            key={index}
            time={forecast.time}
            icon={WeatherIcon(forecast.description)}
            degree={convertTemperature(forecast.degree, temperatureUnit)}
          />
        ))}
      </div>
    </div>
  );
}

export default ForecastToday;
