import { useQuery } from '@tanstack/react-query';
import { apiClient } from '../lib/apiClient';

export function useHighValueProducts() {
  return useQuery({
    queryKey: ['high-value-products'],
    queryFn: () => apiClient.getHighValueProducts(),
  });
} 