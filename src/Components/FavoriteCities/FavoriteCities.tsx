import styles from './FavoriteCities.module.css';
import IconRainy from '../../assets/icons/rainy.svg';
import { RootState } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import IconFavoriteFill from '../../assets/favoriteFill.svg';
import { removeFavorite } from '../../store/slices/favorite.slice';
import { useNavigate } from 'react-router-dom';

function FavoriteCities() {
  const dispatch = useDispatch();
  const { cities: favoriteCities } = useSelector((state: RootState) => state.favorites);
  const navigate = useNavigate();

  const toggleFavorite = (cityName: string) => {
    if (favoriteCities.includes(cityName)) {
      dispatch(removeFavorite(cityName));
    }
  };

  const handleCityClick = (cityName: string) => {
    navigate(`/forecast/${cityName}`);
  };

  return (
    <div className={styles.containerFavoriteCities}>
      {favoriteCities.length > 0 ? (
        favoriteCities.map((city) => (
          <div key={city} className={styles.wrapperCity}>
            <div className={styles.informationCity} onClick={() => handleCityClick(city)}>
              <img src={IconRainy} alt="Weather Icon" />
              <h3>{city}</h3>
            </div>
            <div className={styles.favoriteButton}>
              <button onClick={() => toggleFavorite(city)}>
                <img src={IconFavoriteFill} alt="Remove from Favorite" />
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>No favorite cities added yet.</p>
      )}
    </div>
  );
}

export default FavoriteCities;
