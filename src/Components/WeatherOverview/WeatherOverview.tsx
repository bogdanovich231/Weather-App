import styles from './WeatherOverview.module.css';
import IconSunny from '../../assets/icons/sunny.svg';

function WeatherOverview() {
  return (
    <div className={styles.containerWeatherOverview}>
      <div className={styles.wrapperInformationOverview}>
        <div className={styles.informationOverview}>
          <h2>Wroclaw</h2>
          <p>Możliwość opadu deszczu: 0%</p>
        </div>
        <div className={styles.degreeOverview}>
          <h1>31&#176;</h1>
        </div>
      </div>
      <div className={styles.iconOverview}>
        <img src={IconSunny} alt="weather degree" />
      </div>
    </div>
  );
}

export default WeatherOverview;
