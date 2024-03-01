import { Box } from '@chakra-ui/react';

import Logo from './components/logo';
import Menu from './components/menu';
import Message from './components/message';
import MobileMenu from './components/mobile-menu';
import Notification from './components/notification';
import Profile from './components/profile';
import Search from './components/search';

const HeaderComponent = () => {
  return (
    <header className="bg-secondary block fixed w-full inset-x-0 z-30 h-16 px-4 shadow-xl">
      <Box className="w-full h-full flex items-center justify-between gap-2 lg:px-10">
        <Box className="flex justify-center items-center ">
          <Logo />
          <MobileMenu />
          <Box className="block lg:hidden">
            <Search />
          </Box>
        </Box>
        <Box className="hidden lg:block">
          <Search />
        </Box>
        <Box className="flex justify-center items-center gap-1 lg:gap-4">
          <Menu />
          <Message />
          <Notification />
          <Profile />
        </Box>
      </Box>
    </header>
  );
};

export default HeaderComponent;
