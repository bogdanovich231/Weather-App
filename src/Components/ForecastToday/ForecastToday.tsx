import styles from './ForecastToday.module.css';
import ForecastTodayBlock from './ForecastTodayBlock';

function ForecastToday() {
  return (
    <div className={styles.containerForecastToday}>
      <h4>Today's forecast</h4>
      <div className={styles.wrapperForecastToday}>
        <ForecastTodayBlock />
        <ForecastTodayBlock />
        <ForecastTodayBlock />
        <ForecastTodayBlock />
        <ForecastTodayBlock />
        <ForecastTodayBlock />
      </div>
    </div>
  );
}

export default ForecastToday;
