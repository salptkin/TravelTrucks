import { Link } from "react-router-dom";
import LinkButton from "../Button/LinkButton";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <main className={`${styles.hero} hero`}>
      <div className={styles.container}>
        <div>
          <h1 className={styles.title}>
            Campers of your dreams
          </h1>
          <h2 className={styles.subtitle}>
            You can find everything you want in our catalog
          </h2>
        </div>

        <LinkButton to="/catalog" text="View Now" />
      </div>
    </main>
  );
}

export default Hero;
