import { Box, Button, Divider, Text } from '@chakra-ui/react';
import { BiHome, BiVideo, BiSave, BiPlus } from 'react-icons/bi';

import { SideBarButton } from '@/components';

const videoOptions = [
  {
    name: 'Home',
    icon: <BiHome />,
  },
  {
    name: 'Live',
    icon: <BiVideo />,
  },
  {
    name: 'Saved Videos',
    icon: <BiSave />,
  },
];

export const VideoSideBar = () => {
  return (
    <Box className="h-screen overflow-y-scroll no-scrollbar">
      <Text className="font-bold mb-4" fontSize="2xl">
        Videos
      </Text>
      <Divider className="mb-4" />
      <Box className="flex flex-col">
        {videoOptions.map((item) => (
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
          Create new Video
        </Button>
      </Box>
      <Divider className="my-4" />
      <Text className="uppercase my-4 text-violet-800 font-bold" fontSize="sm">
        Followed
      </Text>
    </Box>
  );
};
