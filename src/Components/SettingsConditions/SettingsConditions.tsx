import { useDispatch, useSelector } from 'react-redux';
import styles from './SettingsConditions.module.css';
import { setTemperatureUnit } from '../../store/slices/temperature.slice';
import { RootState } from '../../store/store';

function SettingsConditions() {
  const dispatch = useDispatch();
  const temperatureUnit = useSelector((state: RootState) => state.temperature.unit);
  const handleTemperatureChange = (unit: 'Celsius' | 'Fahrenheit' | 'Kelvin') => {
    dispatch(setTemperatureUnit(unit));
  };

  return (
    <div className={styles.containerSettigs}>
      <h4>Temperature</h4>
      <div className={styles.wrapperSettingsDegree}>
        <div className={`${styles.settingOption} ${temperatureUnit === 'Celsius' ? styles.active : ''}`}>
          <button onClick={() => handleTemperatureChange('Celsius')}>
            <h4>Celsius</h4>
          </button>
        </div>
        <div className={`${styles.settingOption} ${temperatureUnit === 'Fahrenheit' ? styles.active : ''}`}>
          <button
            className={temperatureUnit === 'Fahrenheit' ? styles.active : ''}
            onClick={() => handleTemperatureChange('Fahrenheit')}
          >
            <h4>Fahrenheit</h4>
          </button>
        </div>

        <div className={`${styles.settingOption} ${temperatureUnit === 'Kelvin' ? styles.active : ''}`}>
          <button
            className={temperatureUnit === 'Kelvin' ? styles.active : ''}
            onClick={() => handleTemperatureChange('Kelvin')}
          >
            <h4>Kelvina</h4>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SettingsConditions;
