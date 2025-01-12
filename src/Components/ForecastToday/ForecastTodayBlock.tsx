import styles from './ForecastToday.module.css';
import IconCloudy from '../../assets/icons/cloudy.svg';

function ForecastTodayBlock() {
  return (
    <div className={styles.containerForecastBlock}>
      <h4>6:00 AM</h4>
      <img src={IconCloudy} alt="cloudy" />
      <h3>25°</h3>
    </div>
  );
}

export default ForecastTodayBlock;
