import { FC, useState } from 'react';

import {
  Box,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { BiCamera } from 'react-icons/bi';

import { Upload } from '@/components';

export type Props = {
  coverImageLink?: string;
};

export const CoverImage: FC<Props> = ({ coverImageLink }) => {
  const [coverImage] = useState<string>(coverImageLink ? coverImageLink : '');
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const handleChangeCoverImage = (e: ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.files) {
  //     const image = e.target.files[0];
  //     if (image) {
  //       setCoverImage(URL.createObjectURL(image));
  //     } else {
  //       setCoverImage('');
  //     }
  //   }
  // };
  return (
    <Box className="relative group">
      {coverImage ? (
        <Image
          src={coverImage}
          alt=""
          className="w-full h-[500px] bg-cover group-hover:opacity-75"
        />
      ) : (
        <Image src="" alt="" className="w-full h-[500px] bg-cover" />
      )}
      <Box className="hidden absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 md:absolute md:bottom-0 md:right-0 h-10 w-10 bg-gray-500 group-hover:flex justify-center items-center rounded-full cursor-pointer">
        <BiCamera
          className="text-2xl text-white  cursor-pointer"
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
    </Box>
  );
};
