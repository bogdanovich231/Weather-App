import styles from './WeatherOverview.module.css';
import IconSunny from '../../assets/icons/sunny.svg';
import { useGetWeatherQuery } from '../../store/api/api';
import Loader from '../Loader/Loader';
interface WeatherOverviewProps {
  city: string;
}
function WeatherOverview({ city }: WeatherOverviewProps) {
  const { data, isLoading } = useGetWeatherQuery(city);

  if (isLoading) {
    return <Loader />;
  }
  const cityName = data?.name;
  const rainProbability = data?.rain ? data.rain['1h'] : 0;
  const temperature = data?.main.temp;

  return (
    <div className={styles.containerWeatherOverview}>
      <div className={styles.wrapperInformationOverview}>
        <div className={styles.informationOverview}>
          <h2>{cityName}</h2>
          <p>Możliwość opadu deszczu: {rainProbability ? rainProbability + '%' : 'Brak danych'}</p>
        </div>
        <div className={styles.degreeOverview}>
          <h1>{temperature ? `${Math.round(temperature)}°` : 'Brak danych'}</h1>
        </div>
      </div>
      <div className={styles.iconOverview}>
        <img src={IconSunny} alt="weather degree" />
      </div>
    </div>
  );
}

export default WeatherOverview;
