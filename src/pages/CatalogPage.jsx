import { useEffect } from "react";
import Navigation from "../components/Navigation/Navigation";
import useFetchAndDispatch from "../hooks/useFetchAndDispatch";
import CatalogMainContent from "../components/CatalogMainContent/CatalogMainContent";
import CatalogSideContent from "../components/CatalogSideContent/CatalogSideContent";
import styles from "./CatalogPage.module.css";

function CatalogPage() {
  const fetchAndDispatch = useFetchAndDispatch();

  useEffect(() => {
    const fetchAndDispatchTrukcs = async () => {
      await fetchAndDispatch();
    };
    fetchAndDispatchTrukcs();
  }, [fetchAndDispatch]);

  return (
    <>
      <Navigation />
          <div className={styles.pageContainer}>
            <CatalogSideContent />
            <CatalogMainContent />
      </div>
    </>
  );
}

export default CatalogPage;
