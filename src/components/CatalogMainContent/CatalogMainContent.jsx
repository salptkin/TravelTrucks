import { useSelector } from "react-redux";
import TruckGeneralInfo from "../TruckGeneralInfo/TruckGeneralInfo";
import styles from "./CatalogMainContent.module.css";
import { CircleLoader } from "react-spinners";

function CatalogMainContent() {
    const { truckList, loading } = useSelector((state) => state.truck);
  
    return (
      <main>
        {loading && (
          <CircleLoader
            color="#E44848"
            size="150px"

          />
        )}
  
        <ul className={styles.truckList}>
          {truckList.length < 1 && !loading ? (
            <li className={styles.notFoundList}>
              <h2 className={styles.notFound}>
                No truck found with this filters!
              </h2>
            </li>
          ) : (
            truckList.map((truck) => <TruckGeneralInfo truck={truck} key={truck.id} />)
          )}
        </ul>
      </main>
    );
  }
  
  export default CatalogMainContent;