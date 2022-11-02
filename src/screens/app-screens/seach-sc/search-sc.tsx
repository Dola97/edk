import { useRoute } from '@react-navigation/native';
import { useQuery } from '@tanstack/react-query';
import api from 'api/api';
import { CategoriesComponent, FilterModal } from 'components';
import { useApp, useModal } from 'hooks';
import React, { useMemo } from 'react';
import tron from 'reactotron-react-native';
import { Platform, SafeAreaView, View } from 'react-native';
import Toast from 'react-native-toast-message';
import { width } from 'theme';
import { Filter } from './filter';
import { useCommunities } from 'hooks';
import { HeaderHome } from './header';
import { CommunitiesSearch } from './communities';
import { UsersSearch } from './users';
import { PostsSearch } from './posts';
import { CoursesSearch } from './courses';

export const SearchScreen = () => {
  const { categorie, filterChoosed } = useApp();
  const { params }: any = useRoute();
  const { filter, setModal } = useModal();
  const { data } = useQuery(
    ['search', params.query],
    async () => {
      const res: any = await api.get(`/api/all/search?search=${params.query}`);
      if (!res.ok) {
        throw res.data;
      } else {
        return res.data;
      }
    },
    {
      onError() {
        Toast.show({
          type: 'error',
          text1: 'General Error Please Try Again',
        });
      },
      enabled: !!params.query,
    },
  );
  const { data: filterData } = useQuery(
    ['filter', filterChoosed],
    async () => {
      const res: any = await api.get(
        `/api/search/m/filter/?category=${filterChoosed?._id}`,
      );
      if (!res.ok) {
        throw res.data;
      } else {
        return res.data;
      }
    },
    {
      onError() {
        Toast.show({
          type: 'error',
          text1: 'General Error Please Try Again',
        });
      },
      enabled: !!filterChoosed?._id,
    },
  );
  const { filterdData }: any = useCommunities(
    filterData ? filterData?.communities : data?.communities,
  );
  const Content = useMemo(() => {
    if (categorie.name == 'Communities') {
      return <CommunitiesSearch filterdData={filterdData} />;
    } else if (categorie.name === 'Users') {
      return (
        <UsersSearch users={filterData ? filterData?.users : data?.users} />
      );
    } else if (categorie.name === 'Posts') {
      return (
        <PostsSearch posts={filterData ? filterData?.posts : data?.posts} />
      );
    } else if (categorie.name === 'Courses') {
      return (
        <CoursesSearch
          courses={filterData ? filterData?.courses : data?.courses}
        />
      );
    }
  }, [
    categorie.name,
    data?.courses,
    data?.posts,
    data?.users,
    filterData,
    filterdData,
  ]);
  tron.log(';par', params.query, filterData);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Platform.OS === 'android' ? 25 : 0,
      }}>
      <FilterModal
        isVis={filter}
        closeModal={() => setModal({ type: 'filter', val: false })}
      />
      <HeaderHome />
      <CategoriesComponent />
      <View style={{ height: 12, backgroundColor: '#EBF1F3', width: width }} />
      <Filter />
      {Content}
    </SafeAreaView>
  );
};
