import styles from './ForecastWeek.module.css';
import IconSunny from '../../assets/icons/sunny.svg';

interface IForecastWeek {
  day: string;
  degree: number;
  description: string;
}

function ForecastWeekBlock({ day, degree, description }: IForecastWeek) {
  const date = new Date(day);
  const dayOfWeek = date.toLocaleString('default', { weekday: 'short' });
  return (
    <div className={styles.containerForecastWeekBlock}>
      <h4>{dayOfWeek}</h4>
      <div className={styles.containerImage}>
        <img src={IconSunny} alt="cloudy" />
        <p>{description}</p>
      </div>
      <h3>{degree}°</h3>
    </div>
  );
}

export default ForecastWeekBlock;
