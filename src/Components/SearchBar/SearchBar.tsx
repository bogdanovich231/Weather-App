import styles from './SearchBar.module.css';
import SearchIcon from '../../assets/search.png';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { setCity, setSearchResults } from '../../store/slices/search.slice';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetCityNameQuery } from '../../store/api/api';
import { IWeather } from '../../utils/Interfaces/WeatherInterface';

function SearchBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { city } = useSelector((state: RootState) => state.search);

  const [searchTerm, setSearchTerm] = useState(city);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { data: citySuggestions } = useGetCityNameQuery(searchTerm, {
    skip: searchTerm.length < 3,
  });

  const handleSearch = (e) => {
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
          placeholder="Szukaj miasta, aby sprawdzić pogodę"
          type="text"
          value={searchTerm}
          onChange={handleSearch}
        />
        <img src={SearchIcon} alt="search" />
      </div>
      {searchTerm.length >= 3 && citySuggestions && citySuggestions.list.length === 0 && (
        <p>Nie znaleziono żadnych miast</p>
      )}
      {isMenuOpen && citySuggestions && citySuggestions.list.length > 0 && (
        <ul className={styles.suggestionsList}>
          {citySuggestions.list.map((result: IWeather) => (
            <li key={result.id} onClick={() => handleCitySelect(result.name)}>
              {result.name}, {result.sys.country}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;
