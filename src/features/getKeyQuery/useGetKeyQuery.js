import { useQueryClient } from "@tanstack/react-query";

export const useGetKeyQuery = (name) => {
    const queryClient = useQueryClient();

    return {
      data: queryClient.getQueryData(name),
      state: queryClient.getQueryState(name)
    };
};