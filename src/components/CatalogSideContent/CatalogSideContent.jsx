import Location from "../Location/Location";
import { useSelector } from "react-redux";
import useFetchAndDispatch from "../../hooks/useFetchAndDispatch";
import ActionButtons from "../ActionButtons/ActionButtons";
import FilterOptions from "../FilterOptions/FilterOptions";
import styles from "./CatalogSideContent.module.css";

function CatalogSideContent() {
  const filterObj = useSelector((state) => state.filter);
  const fetchAndDispatch = useFetchAndDispatch();

  function handleSearch() {
    fetchAndDispatch(filterObj);
  }

  return (
    <aside className={styles.aside}>
      <div className={styles.locationSection}>
        <Location />
      </div>

      <div className={styles.filterSection}>
        <h2 className={styles.title}>Filters</h2>

        <div className={styles.filterGroup}>
          <h3 className={styles.sectionTitle}>Vehicle equipment</h3>
          <div className={styles.divider}></div>

          <ul className={styles.filterList}>
            <FilterOptions iconName="ac" text="AC" filterName="AC" filterValue="true" />
            <FilterOptions iconName="automatic" text="Automatic" filterName="transmission" filterValue="automatic" />
            <FilterOptions iconName="kitchen" text="Kitchen" filterName="kitchen" filterValue="true" />
            <FilterOptions iconName="tv" text="TV" filterName="TV" filterValue="true" />
            <FilterOptions iconName="bathroom" text="Bathroom" filterName="bathroom" filterValue="true" />
          </ul>
        </div>

        <div className={styles.filterGroup}>
          <h3 className={styles.sectionTitle}>Vehicle type</h3>
          <div className={styles.divider}></div>

          <ul className={styles.filterList}>
            <FilterOptions iconName="van" text="Van" filterName="form" filterValue="van" />
            <FilterOptions iconName="fully-integrated" text="Fully Integrated" filterName="form" filterValue="fullyIntegrated" />
            <FilterOptions iconName="alcove" text="Alcove" filterName="form" filterValue="alcove" />
          </ul>
        </div>
      </div>

      <div className={styles.buttonWrapper}>
        <ActionButtons
          text="Search"
          onClick={handleSearch}
        />
      </div>
    </aside>
  );
}

export default CatalogSideContent;
