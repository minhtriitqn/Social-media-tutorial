import { cloneDeep } from 'lodash';
import { Link } from 'react-router-dom';

import {
  CHAT_PATH,
  FRIEND_PATH,
  GROUP_PATH,
  HOME_PATH,
  MARKET_PATH,
  PROFILE_PATH,
  VIDEO_PATH,
  EVENT_PATH,
} from './path';
import { TypeNavs, TypeRoutes } from './type-navs';
import {
  Market,
  Friends,
  Group,
  Home,
  Chat,
  Profile,
  Video,
  Events,
} from '@/pages';
import PrivateRoute from '@/routes/private-route';
import { capitalizeFirstLetter } from '@/utils';

const navs: TypeNavs[] = [
  {
    key: HOME_PATH,
    label: 'home',
    element: <Home />,
  },
  {
    key: PROFILE_PATH,
    label: 'profile',
    element: <Profile />,
  },
  {
    key: MARKET_PATH,
    label: 'cart',
    element: <Market />,
  },
  {
    key: VIDEO_PATH,
    label: 'video',
    element: <Video />,
  },
  {
    key: FRIEND_PATH,
    label: 'friend',
    element: <Friends />,
  },
  {
    key: GROUP_PATH,
    label: 'group',
    element: <Group />,
  },
  {
    key: CHAT_PATH,
    label: 'chat',
    element: <Chat />,
  },
  {
    key: EVENT_PATH,
    label: 'event',
    element: <Events />,
  },
];

const getRoutes = (arr: TypeRoutes[], nav: TypeNavs, basePath = '') => {
  if (nav.children) {
    for (const n of nav.children) {
      getRoutes(arr, n, basePath + nav.key);
    }
  }
  if (!nav.element) return;

  arr.push({
    path: basePath + nav.key,
    element: nav.element && <PrivateRoute>{nav.element}</PrivateRoute>,
  });

  return arr;
};

const addLink = (nav: TypeNavs, path: string) => {
  return nav.children ? (
    capitalizeFirstLetter(nav.label as string)
  ) : (
    <Link to={path}>{capitalizeFirstLetter(nav.label as string)}</Link>
  );
};

const getShowNavigation = (
  nav: TypeNavs,
  basePath = '',
): TypeNavs | undefined => {
  if (!nav.label) return;
  if (nav.children) {
    const arr: TypeNavs[] = [];
    for (const n of nav.children) {
      const formatN = getShowNavigation(n, basePath + nav.key);
      if (formatN) arr.push(formatN);
    }

    nav.children = arr.length > 0 ? arr : undefined;
  }

  return {
    key: basePath + nav.key,
    label: addLink(nav, basePath + nav.key),
    children: nav.children,
    element: nav.element,
  };
};

const menuList: TypeNavs[] = [];
const routeList: TypeRoutes[] = [];
const navList: TypeNavs[] = navs.map((nav) => ({
  key: nav.key,
  label: nav.label,
}));

for (const nav of navs) {
  const nav1 = cloneDeep(nav);
  const n = getShowNavigation(nav1);
  n && menuList.push(n);

  const nav2 = cloneDeep(nav);
  getRoutes(routeList, nav2);
}

export { routeList, menuList, navList };
