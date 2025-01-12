import styles from './ForecastConditions.module.css';
import IconRain from '../../assets/iconsConditions/rain.svg';

function ForecastConditions() {
  return (
    <div className={styles.containerForecastConditions}>
      <h4>Air Conditions</h4>
      <div className={styles.wrrapperForecastConditions}>
        <ul>
          <li>
            <img src={IconRain} alt="condition" />
            <div className={styles.conditionTitle}>
              <h4>Chance of rain</h4>
              <h3>0%</h3>
            </div>
          </li>
          <li>
            <img src={IconRain} alt="" />
            <div className={styles.conditionTitle}>
              <h4>Wind</h4>
              <h3>0.2 km/h</h3>
            </div>
          </li>
          <li>
            <img src={IconRain} alt="" />
            <div className={styles.conditionTitle}>
              <h4>Cloudiness</h4>
              <h3>0%</h3>
            </div>
          </li>
          <li>
            <img src={IconRain} alt="" />
            <div className={styles.conditionTitle}>
              <h4> Precipitation Amount</h4>
              <h3>0%</h3>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ForecastConditions;
