import { useMutation } from "@tanstack/react-query";
import { httpServer } from "@/lib/server";

export const useTransferInterBank = ({onSuccess, onError}) => { 
  const transferInterBank = async (requestValue) => {
    const response = await httpServer.post('/api/v1/transaction/transaction-inter/create', requestValue);
      
    return response.data;
  };
  
  return useMutation({
    mutationFn:transferInterBank,
    onSuccess,
    onError
  })
}