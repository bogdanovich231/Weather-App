import SearchBar from '../../Components/SearchBar/SearchBar';
import styles from './MainPage.module.css';

function MainPage() {
  return (
    <div className={styles.containerMainPage}>
      <div className={styles.wrapperMainPage}>
        <h1>Check the weather in your city</h1>
        <div className={styles.wrapperSearchMainPage}>
          <SearchBar />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
