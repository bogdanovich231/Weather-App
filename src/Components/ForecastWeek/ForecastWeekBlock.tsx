import styles from './ForecastWeek.module.css';

interface IForecastWeek {
  day: string;
  degree: number;
  description: string;
  icon: string;
}

function ForecastWeekBlock({ day, degree, description, icon }: IForecastWeek) {
  const date = new Date(day);
  const dayOfWeek = date.toLocaleString('default', { weekday: 'short' });
  return (
    <div className={styles.containerForecastWeekBlock}>
      <h4>{dayOfWeek}</h4>
      <div className={styles.containerImage}>
        <img src={icon} alt="cloudy" />
        <p>{description}</p>
      </div>
      <h3>{degree}°</h3>
    </div>
  );
}

export default ForecastWeekBlock;
