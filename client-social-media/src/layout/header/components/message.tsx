import {
  Button,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  WrapItem,
} from '@chakra-ui/react';
import { MdMessage } from 'react-icons/md';

const Message = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <Button px="0">
          <WrapItem className="bg-gray-500 p-2 rounded-full">
            <MdMessage className="text-md lg:text-xl text-white" />
          </WrapItem>
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Đoạn chat</PopoverHeader>
        <PopoverBody></PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default Message;
