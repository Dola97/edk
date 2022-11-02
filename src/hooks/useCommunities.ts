import { useMemo } from 'react';
export const useCommunities = (data: any[]) => {
  const filterdData = useMemo(
    () =>
      data
        ?.map((item: any) => {
          return {
            category: item.category,
            intrests: data.filter(
              ({ category }: any) => item.category._id === category._id,
            ),
          };
        })
        .filter(
          (v: any, i: any, a: any) =>
            a.findIndex((v2: any) => v2.category._id === v.category._id) === i,
        ),
    [data],
  );

  return {
    filterdData,
  };
};
