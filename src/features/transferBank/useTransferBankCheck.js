import { useMutation } from "@tanstack/react-query";
import { httpServer } from "@/lib/server";

export const useTransferBankCheck = ({onSuccess, onError}) => { 
  const transferBankCheckFetch = async (requestValue) => {
    const response = await httpServer.post('/api/v1/transaction/transaction-intra/check', requestValue);
      
    return response.data;
  };
  
  return useMutation({
    mutationFn:transferBankCheckFetch,
    onSuccess,
    onError
  })
}