import styles from "./Svg.module.css";

function Svg({ cssClass = "", iconName }) {
  const combinedClass = `${styles.icon} ${cssClass}`;

  return (
    <svg className={combinedClass}>
      <use href={`/icons.svg#icon-${iconName}`} />
    </svg>
  );
}

export default Svg;
