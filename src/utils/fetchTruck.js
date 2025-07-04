import axiosInstance from "./axios";

export const fetchTruck = async (filters = {}) => {
  try {
    const response = await axiosInstance.get("", { params: filters });
    return response.data;
  } catch (e) {
    throw new Error(e.response.data);
  }
};