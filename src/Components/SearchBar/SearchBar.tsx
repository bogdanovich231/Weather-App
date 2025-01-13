import styles from './SearchBar.module.css';
import SearchIcon from '../../assets/search.png';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { setCity, setSearchResults } from '../../store/slices/search.slice';
import { addFavorite, removeFavorite } from '../../store/slices/favorite.slice';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetCityNameQuery } from '../../store/api/api';
import { IWeather } from '../../utils/Interfaces/WeatherInterface';
import IconFavorite from '../../assets/favorite.svg';
import IconFavoriteFill from '../../assets/favoriteFill.svg';

function SearchBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { city } = useSelector((state: RootState) => state.search);
  const { cities: favoriteCities } = useSelector((state: RootState) => state.favorites);

  const [searchTerm, setSearchTerm] = useState(city);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { data: citySuggestions } = useGetCityNameQuery(searchTerm, {
    skip: searchTerm.length < 3,
  });

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchTerm(query);
    dispatch(setCity(query));
    setIsMenuOpen(query.length >= 3);
  };

  const handleCitySelect = (cityName: string) => {
    dispatch(setCity(cityName));
    dispatch(setSearchResults([]));
    setSearchTerm(cityName);
    setIsMenuOpen(false);
    navigate(`/forecast/${cityName}`);
  };

  const toggleFavorite = (cityName: string) => {
    if (favoriteCities.includes(cityName)) {
      dispatch(removeFavorite(cityName));
    } else {
      dispatch(addFavorite(cityName));
    }
  };

  useEffect(() => {
    if (searchTerm.length === 0) {
      dispatch(setSearchResults([]));
      setIsMenuOpen(false);
    }
  }, [searchTerm, dispatch]);

  return (
    <div className={styles.containerSearchBar}>
      <div className={styles.wrapperSearchBar}>
        <input
          className={styles.inputSearch}
          placeholder="Search city for weather"
          type="text"
          value={searchTerm}
          onChange={handleSearch}
        />
        <img src={SearchIcon} alt="search" />
      </div>
      {searchTerm.length >= 3 && citySuggestions && citySuggestions.list.length === 0 && <p>No cities found</p>}
      {isMenuOpen && citySuggestions && citySuggestions.list.length > 0 && (
        <ul className={styles.suggestionsList}>
          {citySuggestions.list.map((result: IWeather) => (
            <li key={result.id} onClick={() => handleCitySelect(result.name)}>
              {result.name}, {result.sys.country}
              <img
                src={favoriteCities.includes(result.name) ? IconFavoriteFill : IconFavorite}
                alt="favorite"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFavorite(result.name);
                }}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;
