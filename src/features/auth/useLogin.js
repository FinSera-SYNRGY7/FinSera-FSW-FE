import { useMutation } from "@tanstack/react-query";
import axios from "axios";


export const useLogin = ({ onSuccess, onError }) => {
  const loginUsers = async (requestDataUsers) => {
    // const response = await axios.post(`${import.meta.env.VITE_AXIOS_BASE_URL}/api/v1/auth/user/login`, requestDataUsers);
    const response = await axios.post(`https://finsera-api.site/api/v1/auth/user/login`, requestDataUsers);
    
    return response.data;
  };

  return useMutation({
    mutationFn: loginUsers,
    onSuccess,
    onError,
  });
};