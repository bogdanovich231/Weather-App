import styles from './ForecastConditions.module.css';
import IconRain from '../../assets/iconsConditions/rain.svg';
import IconCloud from '../../assets/iconsConditions/cloud.svg';
import IconWind from '../../assets/iconsConditions/wind.svg';
import { useGetForecastQuery } from '../../store/api/api';
import Loader from '../Loader/Loader';

interface ForecastConditionsProps {
  city: string;
}

function ForecastConditions({ city }: ForecastConditionsProps) {
  const { data, isLoading } = useGetForecastQuery(city);

  if (isLoading) {
    return <Loader />;
  }

  const currentForecast = data?.list?.[0];
  if (!currentForecast) {
    return <p>No forecast data available.</p>;
  }

  const { pop, rain, snow, wind, clouds } = currentForecast;

  return (
    <div className={styles.containerForecastConditions}>
      <h4>Air Conditions</h4>
      <div className={styles.wrrapperForecastConditions}>
        <ul>
          <li>
            <img src={IconRain} alt="condition" />
            <div className={styles.conditionTitle}>
              <h4>Chance of rain</h4>
              <h3>{pop ? Math.round(pop * 100) + '%' : '0%'}</h3>
            </div>
          </li>
          <li>
            <img src={IconWind} alt="" />
            <div className={styles.conditionTitle}>
              <h4>Wind</h4>
              <h3>{wind?.speed ? `${(wind.speed * 3.6).toFixed(1)} km/h` : '0 km/h'} </h3>
            </div>
          </li>
          <li>
            <img src={IconCloud} alt="cloud" />
            <div className={styles.conditionTitle}>
              <h4>Cloudiness</h4>
              <h3>{clouds?.all ? `${clouds.all}%` : '0%'}</h3>
            </div>
          </li>
          <li>
            <img src={IconRain} alt="" />
            <div className={styles.conditionTitle}>
              <h4>Precip</h4>
              <h3>{rain?.['1h'] || snow?.['1h'] ? `${(rain?.['1h'] || snow?.['1h']).toFixed(1)} mm` : '0 mm'}</h3>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ForecastConditions;
