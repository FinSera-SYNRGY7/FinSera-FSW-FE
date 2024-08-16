import { useQuery } from "@tanstack/react-query";
import { httpServer } from "@/lib/server";

export const useNotification = () => {

  const getNotification = async () => {
    const response = await httpServer.get("/api/v1/notif");

    return response.data.data;
  };

  return useQuery({
    queryFn: getNotification,
    queryKey: ["getNotification"],
  });
};