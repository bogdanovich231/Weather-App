import ForecastConditions from '../../Components/ForecastConditions/ForecastConditions';
import ForecastToday from '../../Components/ForecastToday/ForecastToday';
import SearchBar from '../../Components/SearchBar/SearchBar';
import SidebarMenu from '../../Components/SidebarMenu/SidebarMenu';
import WeatherOverview from '../../Components/WeatherOverview/WeatherOverview';
import styles from './ForecastPage.module.css';
import { useParams } from 'react-router-dom';

function ForecastPage() {
  const { city } = useParams();
  const cityName = city || 'Wroclaw';
  return (
    <div className={styles.containerForecastPage}>
      <div className={styles.sidebar}>
        <SidebarMenu />
      </div>
      <div className={styles.content}>
        <SearchBar />
        <WeatherOverview city={cityName} />
        <ForecastToday city={cityName} />
        <ForecastConditions city={cityName} />
      </div>
    </div>
  );
}

export default ForecastPage;
