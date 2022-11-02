import { useMemo } from 'react';

export const usePosts = (data: any[], updateData: any) => {
  useMemo(
    () =>
      updateData(
        data
          ?.map((item: any) => {
            return item?.posts?.map((obej: any) => {
              return { ...obej, title: item.title, slug: item.slug };
            });
          })
          .flat()
          .filter(item => {
            if (item) {
              return item;
            }
          }),
      ),
    [data, updateData],
  );
};
