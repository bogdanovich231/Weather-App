import SearchBar from '../../Components/SearchBar/SearchBar';
import styles from './MainPage.module.css';

function MainPage() {
  return (
    <div className={styles.containerMainPage}>
      <div className={styles.wrapperMainPage}>
        <h1>Twój lokalny prognozator pogody</h1>
        <div className={styles.wrapperSearchMainPage}>
        <SearchBar />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
