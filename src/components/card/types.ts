import { ColorValue } from 'react-native';

export interface CardProps {
  bg: ColorValue | undefined;
  imgUser?: any;
  postImg?: any;
  isPersonal: any;
  isComment: boolean;
  detaild: boolean;
  title?: any;
  by?: any;
  pressMenu: () => void;
  likes?: any;
  pressShare: () => void;
  comments?: any;
  desc?: any;
  time?: any;
  isLiked?: boolean | any;
  Join?: () => void;
  isRecomended?: boolean | any;
  pressCard?: () => void;
  writeReply?: () => void;
  work?: any;
  PressLike?: () => void;
  isLoading: boolean | undefined;
}
