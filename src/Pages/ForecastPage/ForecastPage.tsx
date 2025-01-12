import SearchBar from '../../Components/SearchBar/SearchBar';
import SidebarMenu from '../../Components/SidebarMenu/SidebarMenu';
import WeatherOverview from '../../Components/WeatherOverview/WeatherOverview';
import styles from './ForecastPage.module.css';

function ForecastPage() {
  return (
    <div className={styles.containerForecastPage}>
      <div className={styles.sidebar}>
        <SidebarMenu />
      </div>
      <div className={styles.content}>
        <SearchBar />
        <WeatherOverview />
      </div>
    </div>
  );
}

export default ForecastPage;
