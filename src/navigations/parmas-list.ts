import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

export type AppParamsList = {
  Auth: undefined;
  App: undefined;
  Splash: undefined;
  IntrestStack: undefined;
  Post: { item: undefined };
  Course: undefined;
};
export type CategoiresParamsList = {
  Categories: undefined;
  CommunitiesListById: { categorie: undefined };
};
export type CourseParamsList = {
  detailsCourse: { item: undefined };
  enrolledCourse: undefined;
};
export type ProfileParamsList = {
  profile: undefined;
  edit: undefined;
  followers: undefined;
  chooseCom: undefined;
  choooseIntrest: undefined;
};
export type CommuntiyParamsList = {
  commDeatils: undefined;
};

export type AuthParamsList = {
  Welcome: undefined;
  Login: undefined;
  SignUp: undefined;
  Forget: undefined;
  newPass: undefined;
  Interest: undefined;
  Comuni: undefined;
};
export type CreateCommuntiyParamsList = {
  createCommunity: undefined;
  invitePeople: undefined;
  CreatePostQuestion: undefined;
  communtiyMainScreen: undefined;
};
export type IntrestParamsList = {
  Intrest: undefined;
  community: undefined;
};
export type HomeStack = {
  Home: undefined;
  search: { query: any };
};

export type BottomTabList = {
  HomeStack: undefined;
  CategoriesStack: undefined;
  notification: undefined;
  add: undefined;
  Chat: undefined;
};
export type DrawerParamsList = {
  bottomScreens: undefined;
};
export type DrawerParamsListLeft = {
  App: undefined;
};
export type authNavigationProps<T extends keyof AuthParamsList> = {
  navigation: NativeStackNavigationProp<AuthParamsList, T>;
};
export type intrestNavigationProps<T extends keyof CategoiresParamsList> = {
  navigation: NativeStackNavigationProp<CategoiresParamsList, T>;
};
export type CommunityNavigationProps<T extends keyof CommuntiyParamsList> = {
  navigation: NativeStackNavigationProp<CommuntiyParamsList, T>;
};
export type CreateCommunityNavigationProps<
  T extends keyof CreateCommuntiyParamsList,
> = {
  navigation: NativeStackNavigationProp<CreateCommuntiyParamsList, T>;
};
export type categoiresNavigationProps<T extends keyof IntrestParamsList> = {
  navigation: NativeStackNavigationProp<IntrestParamsList, T>;
};
export type courseNavigationProps<T extends keyof CourseParamsList> = {
  navigation: NativeStackNavigationProp<CourseParamsList, T>;
};
export type profileNavigationProps<T extends keyof ProfileParamsList> = {
  navigation: NativeStackNavigationProp<ProfileParamsList, T>;
};

export type homeNavigationProps<T extends keyof HomeStack> = {
  navigation: NativeStackNavigationProp<HomeStack, T>;
};

export type bottomNavigationProps<T extends keyof BottomTabList> = {
  navigation: BottomTabNavigationProp<BottomTabList, T>;
};

export type PrimaryParamList = AuthParamsList &
  HomeStack &
  BottomTabList &
  AppParamsList &
  CategoiresParamsList &
  CourseParamsList &
  CreateCommuntiyParamsList &
  ProfileParamsList &
  CommuntiyParamsList &
  IntrestParamsList;
export type PrimaryParamListKeys = keyof PrimaryParamList;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends PrimaryParamList {}
  }
}
