import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { apiClient } from '../lib/apiClient';

// Hook lấy danh sách sản phẩm
export function useProducts() {
  return useQuery({
    queryKey: ['products'],
    queryFn: apiClient.getProducts,
  });
}

// Hook lấy chi tiết sản phẩm
export function useProduct(id) {
  return useQuery({
    queryKey: ['products', id],
    queryFn: () => apiClient.getProduct(id),
    enabled: !!id, // Chỉ gọi API khi có id
  });
}

// Hook tạo sản phẩm mới
export function useCreateProduct() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: apiClient.createProduct,
    onSuccess: () => {
      // Invalidate cache và fetch lại data
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
  });
}

// Hook cập nhật sản phẩm
export function useUpdateProduct() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }) => apiClient.updateProduct(id, data),
    onSuccess: (_, { id }) => {
      // Cập nhật cache
      queryClient.invalidateQueries({ queryKey: ['products'] });
      queryClient.invalidateQueries({ queryKey: ['products', id] });
    },
  });
}

// Hook xóa sản phẩm
export function useDeleteProduct() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: apiClient.deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
  });
} 