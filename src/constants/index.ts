export let API_BASE_URL = '';
if (process.env.NODE_ENV !== 'production') {
  API_BASE_URL = 'https://staging.r1.edactic.io';
} else {
  API_BASE_URL = 'https://staging.r1.edactic.io';
}
export const EMAIL_REGEX =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const CATEGORIES = [
  {
    name: 'Communities',
  },
  {
    name: 'Users',
  },
  {
    name: 'Posts',
  },
  {
    name: 'Media',
  },
  {
    name: 'Courses',
  },
];

export const FILTER = [
  {
    name: 'Business',
  },
  {
    name: 'Finance',
  },
  {
    name: 'Developement',
  },
  {
    name: 'Technology',
  },
  {
    name: 'Investment',
  },
  {
    name: 'Health',
  },
];

export const QUERYS = {
  intrest: 'intrest',
  communities: 'communities',
  feed: 'feed',
  post: 'post',
  profile: 'profile',
  myProfile: 'myProfile',
  followers: 'followers',
  following: 'following',
  mycommunities: 'mycommunities',
  communtiesById: 'communtiesById',
  Fav: 'Fav',
  coureseInfo: 'coureseInfo',
  courseContent: 'courseContent',
  suggFriend: 'suggFriend',
  timeLine: 'timeLine',
};

export const apiRoutes = {
  intrest: '/api/categories',
  communities: '/api/communities/recommended',
  feed: '/api/community/feed',
  post: '/api/get/post/',
  profile: '/api/myprofile',
  myProfile: '/api/profile',
  followers: '/api/user/followers',
  following: '/api/user/following',
  mycommunities: '/api/mycommunities',
  communtiesById: '/api/community/category',
  mywishlist: '/api/mywishlist',
  coureseInfo: '/api/course-info',
  courseSections: '/api/course/sections',
  friends: '/api/friends',
  timeline: '/api/timeline',
};
