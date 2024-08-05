import { useMutation, useQuery } from "@tanstack/react-query";
import { httpServer } from "@/lib/server";

export const useTransferBankCheck = ({onSuccess, onError}) => { 
  const transferBankCheckFetch = async (requestValue) => {
      // const response = await axios.post(`${import.meta.env.VITE_AXIOS_BASE_URL}/api/v1/auth/user/login`, requestValue);
    const response = await httpServer.post(`https://finsera-api.site/api/v1/transaction/transaction-intra/check`, requestValue);
      
    return response.data;
  };
  
  return useMutation({
    mutationFn:transferBankCheckFetch,
    onSuccess,
    onError
  })
}