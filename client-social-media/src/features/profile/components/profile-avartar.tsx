import { useState } from 'react';

import {
  Avatar,
  Box,
  Button,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { BiCamera } from 'react-icons/bi';
import { BsPersonAdd } from 'react-icons/bs';
import { FaFacebookMessenger } from 'react-icons/fa';

import { Upload } from '@/components';

type Props = {
  avatarLink?: string;
  fullnameUser: string;
  description?: string;
};

export const ProfileAvatar = ({
  avatarLink,
  fullnameUser,
  description,
}: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [avatar] = useState<string>(avatarLink ? avatarLink : '');

  return (
    <Box className="bg-white flex flex-col justify-center items-center w-full py-4 rounded-lg border-2 mt-4">
      <Box className="relative">
        {avatar ? (
          <Avatar src={avatar} size="2xl" />
        ) : (
          <Avatar src="" size="2xl" />
        )}
        <BiCamera
          className="cursor-pointer bg-gray-300 p-1 text-2xl rounded-full absolute bottom-0 right-0 -translate-x-1/2 -translate-y-1/2"
          onClick={onOpen}
        />
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Change your avatar</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Upload />
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
      <Text className="font-bold mt-5" fontSize={{ base: 'md', lg: 'lg' }}>
        {fullnameUser}
      </Text>
      <Text className="text-gray-500 mt-2 mb-4" fontSize="sm">
        {description}
      </Text>
      <Box className="flex gap-4">
        <Button
          leftIcon={<BsPersonAdd />}
          colorScheme="teal"
          variant="solid"
          size={{ base: 'xs', lg: 'md' }}
        >
          Add Friend
        </Button>
        <IconButton
          aria-label="Add to friends"
          icon={<FaFacebookMessenger />}
          size={{ base: 'xs', lg: 'md' }}
        />
      </Box>
    </Box>
  );
};
