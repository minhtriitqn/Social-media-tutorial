import {
  Box,
  Button,
  Divider,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import Lottie from 'lottie-react';
import toast from 'react-hot-toast';
import { LuLogOut } from 'react-icons/lu';
import { RiProfileLine } from 'react-icons/ri';
import { RiSettings4Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';

import warning from '../../../lottie/warningwarning.json';
import { useAuthStore } from '@/features/auth';

export const ProfileOptions = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { logout } = useAuthStore();

  const handleLogOut = () => {
    logout();
    toast.success('See you again!');
  };

  const profileOptions = [
    {
      icon: <RiProfileLine />,
      name: 'View Profile',
      link: '/profile',
    },
    {
      icon: <RiSettings4Line />,
      name: 'Profile Setting',
      link: '/profile-setting',
    },
    {
      icon: <LuLogOut />,
      name: 'Log Out',
      click: () => onOpen(),
    },
  ];

  return (
    <Box>
      {profileOptions.map((item) => (
        <Link key={item.name} to={item.link as string}>
          <Button
            className="flex !justify-start items-center gap-4 w-full my-1"
            onClick={item.click}
          >
            <Box>{item.icon}</Box>
            <Text>{item.name}</Text>
          </Button>
        </Link>
      ))}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Log Out</ModalHeader>
          <ModalCloseButton />
          <Divider />
          <ModalBody className="flex flex-col justify-center items-center">
            <Box className="w-20 h-20">
              <Lottie animationData={warning} />
            </Box>
            <Text className="font-bold">Do you want logout!</Text>
          </ModalBody>
          <Box className="!flex justify-center items-center my-6">
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              colorScheme="blue"
              variant="outline"
              onClick={() => handleLogOut()}
            >
              Log out
            </Button>
          </Box>
        </ModalContent>
      </Modal>
    </Box>
  );
};
