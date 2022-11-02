import { useMemo } from 'react';
export const useIsFav = (favList: any, courseId: number | any) => {
  const isFav = useMemo(
    () =>
      favList?.some((item: any) => {
        return item._id == courseId;
      }),
    [courseId, favList],
  );

  return {
    isFav,
  };
};
