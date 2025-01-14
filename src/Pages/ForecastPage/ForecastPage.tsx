import FavoriteCities from '../../Components/FavoriteCities/FavoriteCities';
import ForecastConditions from '../../Components/ForecastConditions/ForecastConditions';
import ForecastToday from '../../Components/ForecastToday/ForecastToday';
import ForecastWeek from '../../Components/ForecastWeek/ForecastWeek';
import SearchBar from '../../Components/SearchBar/SearchBar';
import SidebarMenu from '../../Components/SidebarMenu/SidebarMenu';
import WeatherOverview from '../../Components/WeatherOverview/WeatherOverview';
import styles from './ForecastPage.module.css';
import { useLocation, useParams } from 'react-router-dom';

function ForecastPage() {
  const { city } = useParams();
  const cityName = city || 'Wroclaw';
  const location = useLocation();

  return (
    <div className={styles.containerForecastPage}>
      <div className={styles.sidebar}>
        <SidebarMenu city={cityName} />
      </div>
      <div className={styles.content}>
        <SearchBar />
        {location.pathname.startsWith('/forecast') && (
          <>
            <WeatherOverview city={cityName} />
            <ForecastToday city={cityName} />
            <ForecastConditions city={cityName} />
          </>
        )}
        {location.pathname.startsWith('/forecast') && <ForecastWeek />}
        {location.pathname === '/favorite-cities' && <FavoriteCities />}
      </div>
    </div>
  );
}

export default ForecastPage;
