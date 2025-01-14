import styles from './SettingsConditions.module.css';

function SettingsConditions() {
  return (
    <div className={styles.containerSettigs}>
      <h4>Temperature</h4>
      <div className={styles.wrapperSettingsDegree}>
        <div className={styles.settingOption}>
          <button>
            <h4>Celsius</h4>
          </button>
        </div>
        <div className={styles.settingOption}>
          <button>
            <h4>Fahrenheit</h4>
          </button>
        </div>

        <div className={styles.settingOption}>
          <button>
            <h4>Kelvina</h4>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SettingsConditions;
