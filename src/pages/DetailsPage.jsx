import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosInstance from "../utils/axios";
import { CircleLoader } from "react-spinners";
import toast, { Toaster } from "react-hot-toast";
import Navigation from "../components/Navigation/Navigation";
import TruckImg from "../components/TruckImg/TruckImg"
import TruckInfo from "../components/TruckInfo/TruckInfo";
import FeatureInfo from "../components/FeatureInfo/FeatureInfo";
import Comments from "../components/Comments/Comments";
import Booking from "../components/Booking/Booking";
import TruckInfoList from "../components/TruckInfoList/TruckInfoList";
import styles from "./DetailsPage.module.css";


function DetailsPage() {
const { id } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [truck, setTruck] = useState(null);
    const keys = truck ? Object.keys(truck) : [];
    const [status, setStatus] = useState("details");
    
    useEffect(() => {
        const fetchTruck = async () => {
          try {
            setLoading(true);
            const res = await axiosInstance(`/${id}`);
            setTruck(res.data);
          } catch (e) {
            toast.error(e.response.data);
            navigate("/catalog");
          } finally {
            setLoading(false);
          }
        };

        fetchTruck();
    }, [id, navigate]);
  
    if (loading || !truck)
      return (
        <CircleLoader
          color="#E44848"
          size="150px"
        />
      );

      return (
        <>
          <Navigation />
          <Toaster />
          <div className={styles.pageContainer}>
            <div className={styles.topSection}>
              <TruckInfo truck={truck} />
    
              <ul className={styles.imageGallery}>
                {truck.gallery.map((g) => (
                  <TruckImg url={g.original} key={g.thumb} alt={truck.name} />
                ))}
                <TruckImg
                  url={truck.gallery[0].original}
                  key={truck.gallery[0].original}
                  alt={truck.name}
                />
              </ul>
    
              <p className={styles.description}>{truck.description}</p>
            </div>
    
            <div className={styles.tabHeader}>
              <h3
                onClick={() => setStatus("details")}
                className={`${styles.tab} ${status === "details" ? styles.activeTab : ""}`}
              >
                Features
              </h3>
              <h3
                onClick={() => setStatus("comments")}
                className={`${styles.tab} ${status === "comments" ? styles.activeTab : ""}`}
              >
                Reviews
              </h3>
            </div>
    
            <div className={styles.contentSection}>
              {status === "details" && (
                <div className={styles.detailsBox}>
                  <ul className={styles.featureList}>
                    {keys.map(
                      (key) =>
                        truck[key] === true && (
                          <FeatureInfo
                            text={key[0].toUpperCase() + key.slice(1)}
                            iconName={key.toLowerCase()}
                            key={key}
                          />
                        )
                    )}
                  </ul>
    
                  <div>
                    <h3 className={styles.vehicleInfo}>Vehicle details</h3>
                    <div className={styles.divider}></div>
    
                    <TruckInfoList truck={truck} />
                  </div>
                </div>
              )}
    
              {status === "comments" && (
                <div className={styles.commentsBox}>
                  <ul className={styles.commentsList}>
                    {truck.reviews.map((r) => (
                      <Comments key={r.comment} review={r} />
                    ))}
                  </ul>
                </div>
              )}
    
              <div className={styles.bookingCard}>
                <div className={styles.bookingWrapper}>
                  <div>
                    <h3 className={styles.bookingTitle}>Book your campervan now</h3>
                    <p className={styles.bookingText}>
                      Stay connected! We are always ready to help you.
                    </p>
                  </div>
                  <Booking />
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }

export default DetailsPage;