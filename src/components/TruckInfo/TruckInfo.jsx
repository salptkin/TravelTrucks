import Svg from "../Svg/Svg";
import styles from "./TruckInfo.module.css";

function TruckInfo({ truck }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{truck.name}</h1>

      <div className={styles.row}>
        <p className={styles.rating}>
          <Svg cssClass="w-[16px] h-[16px]" iconName="filled-star" />
          {`${truck.rating}(${truck.reviews.length} Reviews)`}
        </p>

        <p className={styles.location}>
          <Svg cssClass="w-[16px] h-[16px]" iconName="map" />
          Kyiv, Ukraine
        </p>
      </div>

      <h2 className={styles.price}>€{truck.price.toFixed(2)}</h2>
    </div>
  );
}

export default TruckInfo;
