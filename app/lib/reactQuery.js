import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // Không fetch lại khi focus window
      refetchOnMount: false, // Không fetch lại khi component mount
      refetchOnReconnect: true, // Fetch lại khi có kết nối internet
      retry: 1, // Số lần retry khi request fail
      staleTime: 5 * 60 * 1000, // Data được coi là fresh trong 5 phút
      cacheTime: 30 * 60 * 1000, // Cache được giữ trong 30 phút
    },
  },
}); 