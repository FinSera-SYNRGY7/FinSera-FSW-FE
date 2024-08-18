import { useMutation } from "@tanstack/react-query";
import { httpServer } from "@/lib/server";

export const useEWallet = ({onSuccess, onError}) => { 
  const eWallet = async (requestValue) => {
    const response = await httpServer.post('/api/v1/transaction/ewallet/create', requestValue);
      
    return response.data;
  };
  
  return useMutation({
    mutationFn:eWallet,
    onSuccess,
    onError
  })
}