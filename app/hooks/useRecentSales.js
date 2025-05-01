'use client';

import { useState, useEffect } from 'react';
import { apiClient } from '@/app/lib/apiClient';

export const useRecentSales = () => {
  const [recentSales, setRecentSales] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecentSales = async () => {
      try {
        const data = await apiClient.getRecentSales();
        setRecentSales(data.data || []);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecentSales();
  }, []);

  return { recentSales, isLoading, error };
}; 