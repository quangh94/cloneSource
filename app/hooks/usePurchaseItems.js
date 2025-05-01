import { useQuery } from '@tanstack/react-query';
import { apiClient } from '../lib/apiClient';

export function usePurchaseItems() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['purchase-items'],
    queryFn: () => apiClient.getPurchaseItems(),
  });

  const items = data?.data || [];
  const applianceItems = items.filter(item => 
    item.attributes?.product_type?.name === '家電'
  ).map(item => ({
    image: item.attributes?.image?.url,
    title: item.name,
  }));

  const furnitureItems = items.filter(item => 
    item.attributes?.product_type?.name === '家具'
  ).map(item => ({
    image: item.attributes?.image?.url,
    title: item.name,
  }));

  return {
    applianceItems,
    furnitureItems,
    isLoading,
    error
  };
} 