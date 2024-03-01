import {
  Box,
  Text,
  Divider,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from '@chakra-ui/react';
import { BiNotification, BiPlus } from 'react-icons/bi';
import { MdOutlineEventBusy } from 'react-icons/md';
import { RiCompassDiscoverLine } from 'react-icons/ri';

import CreateGroup from './create-group';
import { SideBarButton } from '@/components';

const eventSideBar = [
  {
    name: 'Group Feeds',
    icon: <RiCompassDiscoverLine />,
  },
  {
    name: 'Discover Group',
    icon: <MdOutlineEventBusy />,
  },
  {
    name: 'Notifcations',
    icon: <BiNotification />,
  },
];

export const GroupSideBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
          onClick={onOpen}
        >
          Create new group
        </Button>
        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create new groups</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <CreateGroup />
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
      <Divider className="my-4" />
      <Text className="uppercase my-4 text-violet-800 font-bold" fontSize="sm">
        Your group created
      </Text>
      <Text className="font-bold cursor-pointer">Danang . 20km</Text>
      <Divider className="my-4" />
    </Box>
  );
};
