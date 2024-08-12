import { useMutation } from "@tanstack/react-query";
import { httpServer } from '@/lib/server'
import axios from 'axios'


export const useRefreshToken = ({ onSuccess, onError }) => {
  const fetchRefreshToken = async (requestToken) => {
    console.log(requestToken)
    // const response = await axios.post(`${import.meta.env.VITE_AXIOS_BASE_URL}/api/v1/auth/user/login`, requestDataUsers);
    const response = await axios.post(`https://finsera-api.site/api/v1/auth/user/refresh-token`, requestToken);
    
    return response.data;
  };

  return useMutation({
    mutationFn: fetchRefreshToken,
    onSuccess,
    onError,
  });
};