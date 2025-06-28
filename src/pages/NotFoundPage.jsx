import Navigation from "../components/Navigation/Navigation";
import styles from "./NotFoundPage.module.css";
import LinkButton from "../components/Button/LinkButton";

function NotFoundPage() {
    return (
        <>
            <Navigation />
            <div className={styles.notFoundPage__content}>
                <div className={styles.notFoundPage__textContainer}>
                    <h1 className={styles.notFoundPage__title}>404 Not Found</h1>
                    <p className={styles.notFoundPage__description}>The page you are looking for does not exist.</p>
                </div>
                <div className={styles.notFoundPage__buttonContainer}>
                    <LinkButton to="/catalog" text="Catalog" />
                </div>
            </div>
        </>
    );
}

export default NotFoundPage;
