import { useQuery } from "@tanstack/react-query";
import { httpServer } from "@/lib/server";

export const useQRIS = () => {

  const getQRIS = async () => {
    const response = await httpServer.get("/api/v1/qris");
    
    const result = {
      ...response.data.data,
      time: (new Date()).toLocaleDateString()
    }
    
    return JSON.stringify(result);
  };

  return useQuery({
    queryFn: getQRIS,
    queryKey: ["getQRIS"],
  });
};