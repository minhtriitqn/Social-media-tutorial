import {
  Avatar,
  Box,
  Button,
  Popover,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Text,
} from '@chakra-ui/react';
import { FaRegWindowClose } from 'react-icons/fa';
import { FaCheck } from 'react-icons/fa6';
import { TfiLayoutMenu } from 'react-icons/tfi';

const menu = [
  {
    name: 'Check read',
    icon: <FaCheck />,
  },
  {
    name: 'Remove notification',
    icon: <FaRegWindowClose />,
  },
];

export const NotificationBox = () => {
  return (
    <Box>
      <Box className="flex gap-2 py-2 px-2 rounded-md hover:bg-gray-200">
        <Avatar src="" />
        <Box>
          <Text fontSize="sm">
            Nguyen Hoang Kim Cuong da gui cho ban mot loi moi ket ban
          </Text>
          <Text fontSize="xs">2 ngay truoc</Text>
        </Box>
        <Popover>
          <PopoverTrigger>
            <Button>
              <TfiLayoutMenu />
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverCloseButton />
            <PopoverBody>
              {menu.map((item) => (
                <Button
                  key={item.name}
                  className="flex !justify-start items-center gap-4 w-11/12 my-1"
                >
                  <Box>{item.icon}</Box>
                  <Text>{item.name}</Text>
                </Button>
              ))}
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Box>
    </Box>
  );
};

export default NotificationBox;
