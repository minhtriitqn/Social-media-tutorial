import { useEffect, useState, ReactNode } from 'react';

import {
  Box,
  Button,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  WrapItem,
  useDisclosure,
} from '@chakra-ui/react';
import { BiMenu } from 'react-icons/bi';

import { CartSideBar, GroupSideBar, HomeSideBar } from '@/features';
import LeftNavBar from '@/layout/navbar-layout/components/left-navbar';

const MobileMenu = () => {
  const [sidebarComponent, setSidebarComponent] = useState<ReactNode>();

  const currentPath = window.location.pathname;
  useEffect(() => {
    if (currentPath == '/') {
      setSidebarComponent(<HomeSideBar />);
    } else if (currentPath == '/cart') {
      setSidebarComponent(<CartSideBar />);
    } else {
      setSidebarComponent(<GroupSideBar />);
    }
  }, [currentPath]);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = () => {
    onOpen();
  };

  return (
    <Box className="lg:hidden">
      <Button px="0" onClick={() => handleClick()}>
        <WrapItem className="bg-gray-500 p-2 rounded-full">
          <BiMenu className="text-md lg:text-xl text-white" />
        </WrapItem>
      </Button>
      <Drawer
        onClose={onClose}
        isOpen={isOpen}
        size={{ xs: 'full', md: 'lg' }}
        placement="left"
      >
        <DrawerOverlay />
        <DrawerContent className="!bg-[#F6F6F7]">
          <DrawerCloseButton />
          <LeftNavBar className="w-full !flex h-screen">
            {sidebarComponent}
          </LeftNavBar>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default MobileMenu;
