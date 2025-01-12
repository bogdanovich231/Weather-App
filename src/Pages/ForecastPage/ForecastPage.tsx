import SearchBar from '../../Components/SearchBar/SearchBar';
import SidebarMenu from '../../Components/SidebarMenu/SidebarMenu';
import WeatherOverview from '../../Components/WeatherOverview/WeatherOverview';
import styles from './ForecastPage.module.css';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';

function ForecastPage() {
  const { city } = useSelector((state: RootState) => state.search);
  return (
    <div className={styles.containerForecastPage}>
      <div className={styles.sidebar}>
        <SidebarMenu />
      </div>
      <div className={styles.content}>
        <SearchBar />
        <WeatherOverview city={city} />
      </div>
    </div>
  );
}

export default ForecastPage;
