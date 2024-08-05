import { httpServer } from '@/lib/server'
import { useQuery } from '@tanstack/react-query'

export const useProfileAccount = async() => {
  const fetchProfile = await httpServer.get('/api/v1/profile')
  
  return useQuery({
    queryFn:fetchProfile,
    queryKey:['fetchProfile']
  })
}