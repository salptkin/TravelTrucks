import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosInstance from "../utils/axios";
import { CircleLoader } from "react-spinners";
import toast, { Toaster } from "react-hot-toast";
import Navigation from "../components/Navigation/Navigation";
import FeatureInfo from "../components/FeatureInfo/FeatureInfo";

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
        
        </>
    )
}

export default DetailsPage;