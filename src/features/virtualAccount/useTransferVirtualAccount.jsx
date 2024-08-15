import { useMutation } from "@tanstack/react-query";
import { httpServer } from "@/lib/server";

export const useTransferVirtualAccount = ({onSuccess, onError}) => { 
  const transferVirtualAccount = async (requestValue) => {
    const response = await httpServer.post('/api/v1/va/transfer-va', requestValue);
      
    return response.data;
  };
  
  return useMutation({
    mutationFn: transferVirtualAccount,
    onSuccess,
    onError
  })
}