import styles from './SearchBar.module.css';
import SearchIcon from '../../assets/search.png';

function SearchBar() {
  return (
    <div className={styles.containerSearchBar}>
      <input className={styles.inputSearch} placeholder="Szukaj miasta, aby sprawdzić pogodę" type="text" />
      <img src={SearchIcon} alt="search" />
    </div>
  );
}

export default SearchBar;
