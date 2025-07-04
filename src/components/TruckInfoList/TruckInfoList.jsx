import styles from "./TruckInfoList.module.css";

function TruckInfoList({ truck }) {
  return (
    <ul className={styles.list}>
      <li className={styles.listItem}>
        Form <span>{truck.form[0].toUpperCase() + truck.form.slice(1)}</span>
      </li>

      <li className={styles.listItem}>
        Length <span>{truck.length}</span>
      </li>

      <li className={styles.listItem}>
        Width <span>{truck.width}</span>
      </li>

      <li className={styles.listItem}>
        Height <span>{truck.height}</span>
      </li>

      <li className={styles.listItem}>
        Tank <span>{truck.tank}</span>
      </li>

      <li className={styles.listItem}>
        Consumption <span>{truck.consumption}</span>
      </li>
    </ul>
  );
}

export default TruckInfoList;
