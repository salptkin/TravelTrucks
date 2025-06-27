import Svg from "../Svg/Svg";
import styles from "./FeatureInfo.module.css";

function FeatureInfo({ iconName, text }) {
  return (
    <li className={styles.featureInfo}>
      <Svg cssClass={styles.icon} iconName={iconName} />
      <p>{text}</p>
    </li>
  );
}

export default FeatureInfo;
