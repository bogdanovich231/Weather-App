import styles from './SidebarMenu.module.css';
import IconWeather from '../../assets/weatherMenu.svg';
import IconHeart from '../../assets/heartMenu.svg';
import IconSetting from '../../assets/settingMenu.svg';
import { Link } from 'react-router-dom';

interface SidebarMenuProps {
  city: string;
}

function SidebarMenu({ city }: SidebarMenuProps) {
  return (
    <div className={styles.containerSidebarMenu}>
      <ul>
        <li>
          <Link to={`/forecast/${city}`}>
            <img src={IconWeather} alt="icon weather" />
            <h4>Weather</h4>
          </Link>
        </li>
        <li>
          <Link to={'/'}>
            <img src={IconHeart} alt="icon heart" />
            <h4>Cities</h4>
          </Link>
        </li>
        <li>
          <Link to={'/'}>
            <img src={IconSetting} alt="icon setting" />
            <h4>Settings</h4>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default SidebarMenu;
