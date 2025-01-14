import styles from './WeatherOverview.module.css';
import IconSunny from '../../assets/icons/sunny.svg';
import { useGetWeatherQuery } from '../../store/api/api';
import Loader from '../Loader/Loader';
import WeatherIcon from '../WeatherIcon/WeatherIcon';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { convertTemperature } from '../../utils/ConvertTemperature/ConvertTemperature';

interface WeatherOverviewProps {
  city: string;
}

function WeatherOverview({ city }: WeatherOverviewProps) {
  const { data, isLoading } = useGetWeatherQuery(city);
  const temperatureUnit = useSelector((state: RootState) => state.temperature.unit);

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
          <h1>{convertTemperature(temperature, temperatureUnit)}</h1>
        </div>
      </div>
      <div className={styles.iconOverview}>
        <img src={weatherIcon} alt="weather icon" />
      </div>
    </div>
  );
}

export default WeatherOverview;
