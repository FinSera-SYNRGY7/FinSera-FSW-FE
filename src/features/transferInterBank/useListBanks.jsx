import { useQuery } from "@tanstack/react-query";
import { httpServer } from "@/lib/server";

export const useListBanks = () => {

  const getListBanks = async () => {
    const response = await httpServer.get("/api/v1/bank/get-all");

    return response.data.data.map((value) => {
      return {
        value: value.bank_id,
        label: value.bank_name
      }
    });
  };

  return useQuery({
    queryFn: getListBanks,
    queryKey: ["getListBanks"],
  });
};