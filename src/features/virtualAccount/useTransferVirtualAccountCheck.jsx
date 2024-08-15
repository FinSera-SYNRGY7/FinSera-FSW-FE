import { useMutation } from "@tanstack/react-query";
import { httpServer } from "@/lib/server";

export const useTransferVirtualAccountCheck = ({onSuccess, onError}) => { 
  const virtualAccountCheckFetch = async (requestValue) => {
    const response = await httpServer.post('/api/v1/va/check-virtual-account', requestValue);
      
    return response.data;
  };
  
  return useMutation({
    mutationFn:virtualAccountCheckFetch,
    onSuccess,
    onError
  })
}