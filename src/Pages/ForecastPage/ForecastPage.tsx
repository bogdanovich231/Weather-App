import SearchBar from '../../Components/SearchBar/SearchBar';
import WeatherOverview from '../../Components/WeatherOverview/WeatherOverview';
import styles from './ForecastPage.module.css';

function ForecastPage() {
  return (
    <div className={styles.containerForecastPage}>
      <SearchBar />
      <WeatherOverview />
    </div>
  );
}

export default ForecastPage;
