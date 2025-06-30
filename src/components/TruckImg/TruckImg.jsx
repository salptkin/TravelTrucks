import styles from "./TruckImg.module.css";

function TruckImg({ url, alt }) {
  return (
    <li>
      <img
        src={url}
        alt={`${alt} image`}
        className={styles.imageItem}
      />
    </li>
  );
}

export default TruckImg;
