import styles from './ForecastToday.module.css';
import IconCloudy from '../../assets/icons/cloudy.svg';
interface IForecastToday {
  time: string;
  degree: number;
}
function ForecastTodayBlock({ time, degree }: IForecastToday) {
  return (
    <div className={styles.containerForecastBlock}>
      <h4>{time}</h4>
      <img src={IconCloudy} alt="cloudy" />
      <h3>{degree}°</h3>
    </div>
  );
}

export default ForecastTodayBlock;
