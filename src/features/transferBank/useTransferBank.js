import { httpServer } from '@/lib/server'
import { useMutation } from '@tanstack/react-query'

export const useTransferBank = ({onSuccess, onError}) => {
  const transferCreate = async (value) => {
    const request = await httpServer.post('/api/v1/transaction/transaction-intra/create', value)
    
    return request.data
  }
  
  return useMutation({
    mutationFn:transferCreate,
    onSuccess,
    onError
  })
}