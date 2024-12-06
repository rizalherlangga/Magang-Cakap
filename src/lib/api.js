import axiosInstance from "@/lib/axios";

export const fetchBanners = async () => {
  try {
    const response = await axiosInstance.get("/banner");
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching banners:",
      error.response?.data || error.message
    );
    return [];
  }
};
