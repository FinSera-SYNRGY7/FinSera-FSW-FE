import { useMutation } from "@tanstack/react-query";
import { httpServer } from '@/lib/server'


export const useRefreshToken = ({ onSuccess, onError }) => {
  const fetchRefreshToken = async (requestToken) => {
    // const response = await axios.post(`${import.meta.env.VITE_AXIOS_BASE_URL}/api/v1/auth/user/login`, requestDataUsers);
    const response = await httpServer.post(`/api/v1/auth/user/refresh-token`, requestToken);
    
    return response.data;
  };

  return useMutation({
    mutationFn: fetchRefreshToken,
    onSuccess,
    onError,
  });
};