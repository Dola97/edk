import { useMemo } from 'react';
export const useIsLike = (likers: any, id: number | any) => {
  const isLike = useMemo(
    () =>
      likers?.some((item: any) => {
        return item.likerId == id;
      }),
    [likers, id],
  );

  return {
    isLike,
  };
};
