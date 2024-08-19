import { httpServer } from '@/lib/server'
import { useQuery } from '@tanstack/react-query'

export const useMutationBank = (dataFilterDate, isLimit = false) => {
  const fetchAccountMutation = async() => {
    const request = await httpServer.get('/api/v1/mutasi',{
      params: dataFilterDate
    })
    
    let result = request.data.data
    
    if(isLimit) {
      result = result.filter((data, index) => index < 3).sort((a, b) => {
        return new Date(a.transaction_date) - new Date(b.transaction_date)
      })
    }
    
    return result
  }
  
  return useQuery({
    queryFn: fetchAccountMutation,
    queryKey: ['fetchAccountMutation', dataFilterDate]
  })
}