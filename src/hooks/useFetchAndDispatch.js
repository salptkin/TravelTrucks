import { useDispatch } from "react-redux";
import { setLoading, setTruckList } from "../redux/truckSlice";
import { useCallback } from "react";
import { fetchTruck } from "../utils/fetchTruck";
import toast from "react-hot-toast";

function useFetchAndDispatch() {
  const dispatch = useDispatch();

  const fetchAndDispatch = useCallback(
    async (params = {}) => {
      try {
        dispatch(setLoading(true));
        const trucks = await fetchTruck(params);
        dispatch(setTruckList(trucks.items));
      } catch (e) {
        dispatch(setTruckList([]));
        toast.error(e.message);
      } finally {
        dispatch(setLoading(false));
      }
    },
    [dispatch]
  );

  return fetchAndDispatch;
}

export default useFetchAndDispatch;