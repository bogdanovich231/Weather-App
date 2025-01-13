import styles from './FavoriteCities.module.css';
import IconRainy from '../../assets/icons/rainy.svg';

function FavoriteCities() {
  return (
    <div className={styles.containerFavoriteCities}>
      <div className={styles.wrapperCity}>
        <div className={styles.informationCity}>
          <img src={IconRainy} alt="" />
          <h3>Wroclaw</h3>
        </div>
        <div className={styles.degreeCity}>
          <h3>31</h3>
        </div>
      </div>
    </div>
  );
}

export default FavoriteCities;
