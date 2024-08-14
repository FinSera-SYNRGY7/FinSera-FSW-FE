import { useMutation } from "@tanstack/react-query";
import { httpServer } from "@/lib/server";

export const useTransferInterBankCheck = ({onSuccess, onError}) => { 
  const transferInterBankCheckFetch = async (requestValue) => {
    const response = await httpServer.post('/api/v1/transaction/transaction-inter/check', requestValue);
      
    return response.data;
  };
  
  return useMutation({
    mutationFn:transferInterBankCheckFetch,
    onSuccess,
    onError
  })
}