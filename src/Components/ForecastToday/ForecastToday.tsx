import { useGetForecastQuery } from '../../store/api/api';
import { getHourlyForecastFromNow } from '../../utils/ForecastForToday/ForecastForToday';
import Loader from '../Loader/Loader';
import styles from './ForecastToday.module.css';
import ForecastTodayBlock from './ForecastTodayBlock';

interface ForecastTodayProps {
  city: string;
}

function ForecastToday({ city }: ForecastTodayProps) {
  const { data, isLoading } = useGetForecastQuery(city);

  if (isLoading) {
    return <Loader />;
  }

  const hourlyForecast = getHourlyForecastFromNow(data);

  return (
    <div className={styles.containerForecastToday}>
      <h4>Today's forecast</h4>
      <div className={styles.wrapperForecastToday}>
        {hourlyForecast.map((forecast, index) => (
          <ForecastTodayBlock key={index} time={forecast.time} degree={forecast.degree} />
        ))}
      </div>
    </div>
  );
}

export default ForecastToday;
