import { Box, Button, Divider, Text } from '@chakra-ui/react';
import {
  BiCar,
  BiCart,
  BiCloudLightning,
  BiFile,
  BiHeart,
  BiMailSend,
  BiMusic,
  BiNotification,
  BiPencil,
  BiPlus,
  BiVideo,
} from 'react-icons/bi';
import { RxAvatar } from 'react-icons/rx';

import { SideBarButton } from '@/components';

const marketSidebarItem = [
  {
    name: 'Find all item',
    icon: <BiCart />,
  },
  {
    name: 'Notifications',
    icon: <BiNotification />,
  },
  {
    name: 'Inbox',
    icon: <BiMailSend />,
  },
  {
    name: 'My account',
    icon: <RxAvatar />,
  },
];
const categoriesItem = [
  {
    name: 'Vehicle',
    icon: <BiCar />,
  },
  {
    name: 'Office items',
    icon: <BiFile />,
  },
  {
    name: 'Music tool',
    icon: <BiMusic />,
  },
  {
    name: 'Electronic',
    icon: <BiCloudLightning />,
  },
  {
    name: 'Entertaiment',
    icon: <BiVideo />,
  },
  {
    name: 'School Items',
    icon: <BiPencil />,
  },
  {
    name: 'Family',
    icon: <BiHeart />,
  },
];

export const CartSideBar = () => {
  return (
    <Box>
      <Text className="font-bold" fontSize="2xl">
        Marketplace
      </Text>
      <Divider className="my-4" />
      <Box className="flex flex-col">
        {marketSidebarItem.map((item) => (
          <SideBarButton
            key={item.name}
            buttonIcon={item.icon}
            buttonName={item.name}
          />
        ))}
        <Button
          leftIcon={<BiPlus className="text-xl" />}
          colorScheme="facebook"
          className="my-2"
        >
          Sale Items
        </Button>
      </Box>
      <Divider className="my-4" />
      <Text className="uppercase my-4 text-violet-800 font-bold" fontSize="sm">
        Filter
      </Text>
      <Text className="font-bold cursor-pointer">Danang . 20km</Text>
      <Divider className="my-4" />
      <Text className="uppercase my-4 text-violet-800 font-bold" fontSize="sm">
        All Categories
      </Text>
      <Box className="flex flex-col gap-4">
        {categoriesItem.map((item) => (
          <SideBarButton
            key={item.name}
            buttonIcon={item.icon}
            buttonName={item.name}
          />
        ))}
      </Box>
    </Box>
  );
};
