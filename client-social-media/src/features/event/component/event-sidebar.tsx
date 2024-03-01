import { Box, Text, Divider, Button } from '@chakra-ui/react';
import { BiPlus } from 'react-icons/bi';
import { LuTags } from 'react-icons/lu';
import { MdOutlineEventBusy } from 'react-icons/md';
import { RiCompassDiscoverLine } from 'react-icons/ri';

import { SideBarButton } from '@/components';

const eventSideBar = [
  {
    name: 'Discover Event',
    icon: <RiCompassDiscoverLine />,
  },
  {
    name: 'Your Event',
    icon: <MdOutlineEventBusy />,
  },
  {
    name: 'Saved Event',
    icon: <LuTags />,
  },
];

export const EventSideBar = () => {
  return (
    <Box>
      <Text className="font-bold" fontSize="2xl">
        Event
      </Text>
      <Divider className="my-4" />
      <Box className="flex flex-col">
        {eventSideBar.map((item) => (
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
          Create new Event
        </Button>
      </Box>
      <Divider className="my-4" />
      <Text className="uppercase my-4 text-violet-800 font-bold" fontSize="sm">
        Filter
      </Text>
      <Text className="font-bold cursor-pointer">Danang . 20km</Text>
      <Divider className="my-4" />
    </Box>
  );
};
