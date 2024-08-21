import { useQuery } from "@tanstack/react-query";
import { httpServer } from "@/lib/server";

export const useProfile = () => {

  const getProfile = async () => {
    const response = await httpServer.get("/api/v1/profile");

    return response.data.data;
  };

  return useQuery({
    queryFn: getProfile,
    queryKey: ["getProfile"],
  });
};