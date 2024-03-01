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
import { IoMdNotifications } from 'react-icons/io';

import { NotificationBox } from '@/components';

const Notification = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <Button px="0">
          {' '}
          <WrapItem className="bg-gray-500 p-2 rounded-full">
            <IoMdNotifications className="text-md lg:text-xl text-white" />
          </WrapItem>
        </Button>
      </PopoverTrigger>
      <PopoverContent w="400px">
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader className="!font-bold">Notification</PopoverHeader>
        <PopoverBody>
          <NotificationBox />
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default Notification;
