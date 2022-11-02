import api from 'api/api';
import { useCallback } from 'react';

export const usePrefetch = (queryClient: any, query: any, route: any) => {
  const prefetchQuery = useCallback(async () => {
    await queryClient.prefetchQuery([query], async () => {
      const res = await api.get(route);
      if (!res.ok) {
        throw res.data;
      } else {
        return res.data;
      }
    });
  }, [query, queryClient, route]);
  return {
    prefetchQuery,
  };
};
