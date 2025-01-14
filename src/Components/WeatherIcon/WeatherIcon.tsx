import IconSunny from '../../assets/icons/sunny.svg';
import IconCloudy from '../../assets/icons/cloudy.svg';
import IconCloud from '../../assets/icons/cloud.svg';
import IconRainy from '../../assets/icons/rainy.svg';
import IconSnowy from '../../assets/icons/snowy.svg';
import IconMoon from '../../assets/icons/moon.svg';

function WeatherIcon(description: string) {
  const normalizedDescription = description.toLowerCase();

  if (normalizedDescription.includes('clear')) {
    return IconSunny;
  } else if (normalizedDescription.includes('clouds')) {
    if (normalizedDescription.includes('scattered')) {
      return IconCloudy;
    } else if (normalizedDescription.includes('overcast')) {
      return IconCloud;
    } else {
      return IconCloud;
    }
  } else if (normalizedDescription.includes('rain')) {
    return IconRainy;
  } else if (normalizedDescription.includes('snow')) {
    return IconSnowy;
  } else if (normalizedDescription.includes('night')) {
    return IconMoon;
  } else {
    return IconSunny;
  }
}

export default WeatherIcon;
