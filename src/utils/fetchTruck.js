import axiosInstance from "./axios";

export const fetchTruck = async (filters = {}) => {
  try {
    const params = {};
    Object.entries(filters).forEach(([key, value]) => {
      if (value === "" || (Array.isArray(value) && value.length === 0)) return;
      if (key === "AC" && value === "true") params["AC"] = true;
      else if (key === "TV" && value === "true") params["TV"] = true;
      else params[key] = value;
    });
    const response = await axiosInstance.get("", { params });
    return response.data;
  } catch (e) {
    throw new Error(e.response.data);
  }
};