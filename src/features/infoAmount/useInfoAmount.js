import { useQuery } from "@tanstack/react-query";
import { httpServer } from "@/lib/server";

export const useInfoAmount = () => {

  const getInfoAmount = async () => {
    const response = await httpServer.get("/api/v1/amount");

    return response.data.data;
  };

  return useQuery({
    queryFn: getInfoAmount,
    queryKey: ["getInfoAmount"],
  });
};