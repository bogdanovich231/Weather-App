import styles from './ForecastToday.module.css';

interface IForecastToday {
  time: string;
  degree: number;
  icon: string;
}

function ForecastTodayBlock({ time, degree, icon }: IForecastToday) {
  return (
    <div className={styles.containerForecastBlock}>
      <h4>{time}</h4>
      <img src={icon} alt="cloudy" />
      <h3>{degree}°</h3>
    </div>
  );
}

export default ForecastTodayBlock;
