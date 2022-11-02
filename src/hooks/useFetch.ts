import { useQuery } from '@tanstack/react-query';
import api from 'api/api';
import Toast from 'react-native-toast-message';

export const useFetch = (queryKey: string, route: string) => {
  const { data, isError, isLoading } = useQuery(
    [queryKey],
    async () => {
      try {
        const res = await api.get(route);
        if (!res.ok) {
          throw res.data;
        } else {
          return res.data;
        }
      } catch (e) {
        //e
      }
    },
    {
      onError() {
        Toast.show({
          type: 'error',
          text1: 'General Error Please Try Again',
        });
      },
    },
  );
  return {
    data,
    isError,
    isLoading,
  };
};
