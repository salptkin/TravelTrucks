import styles from "./ActionButtons.module.css";

function ActionButtons({ text, onClick, cssClass, type }) {
  const combinedClass = `${styles.button} ${cssClass || ""}`;

  return (
    <button
      type={type || "submit"}
      className={combinedClass}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default ActionButtons;
