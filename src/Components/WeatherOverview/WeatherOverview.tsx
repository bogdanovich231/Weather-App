import styles from './WeatherOverview.module.css';
import IconSunny from '../../assets/icons/sunny.svg';
import { useGetWeatherQuery } from '../../store/api/api';
import Loader from '../Loader/Loader';
import WeatherIcon from '../WeatherIcon/WeatherIcon';
interface WeatherOverviewProps {
  city: string;
}
function WeatherOverview({ city }: WeatherOverviewProps) {
  const { data, isLoading } = useGetWeatherQuery(city);

  if (isLoading) {
    return <Loader />;
  }
  const cityName = data?.name;
  const description = data?.weather?.[0]?.description;
  const temperature = data?.main.temp;
  const weatherIcon = description ? WeatherIcon(description) : IconSunny;

  return (
    <div className={styles.containerWeatherOverview}>
      <div className={styles.wrapperInformationOverview}>
        <div className={styles.informationOverview}>
          <h2>{cityName}</h2>
          <p>{description ? description.charAt(0).toUpperCase() + description.slice(1) : 'No data'}</p>
        </div>
        <div className={styles.degreeOverview}>
          <h1>{temperature ? `${Math.round(temperature)}°` : 'No data'}</h1>
        </div>
      </div>
      <div className={styles.iconOverview}>
        <img src={weatherIcon} alt="weather icon" />
      </div>
    </div>
  );
}

export default WeatherOverview;
