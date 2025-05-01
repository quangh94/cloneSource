import { useQuery } from '@tanstack/react-query';
import { apiClient } from '../lib/apiClient';

export function useServiceStats() {
  return useQuery({
    queryKey: ['service-stats'],
    queryFn: apiClient.getServiceStats,
    // Cập nhật mỗi 5 phút
    refetchInterval: 5 * 60 * 1000,
  });
} 