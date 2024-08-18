import { useMutation } from "@tanstack/react-query";
import { httpServer } from "@/lib/server";

export const useEWalletCheck = ({onSuccess, onError}) => { 
  const eWalletCheck = async (requestValue) => {
    const response = await httpServer.post('/api/v1/transaction/ewallet/check', requestValue);
      
    return response.data;
  };
  
  return useMutation({
    mutationFn:eWalletCheck,
    onSuccess,
    onError
  })
}