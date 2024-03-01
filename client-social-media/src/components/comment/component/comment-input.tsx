import {
  Avatar,
  Box,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from '@chakra-ui/react';
import { BiSend } from 'react-icons/bi';

import { optionInput } from '../../../features/post/constant';

const CommentInput = () => {
  const actions = optionInput.slice(0, 4);
  return (
    <Box className="mt-2 flex gap-2 ">
      <Avatar size="sm" className="mt-2" />
      <Box className="rounded-md bg-[#F6F6F7] p-2">
        <Text className="font-bold">Kim Cuong</Text>
        <InputGroup>
          <Input placeholder="Type your comment" />
          <InputRightElement>
            <BiSend className="cursor-pointer text-gray-500 text-lg" />
          </InputRightElement>
        </InputGroup>
        <Box className="flex mt-2 text-lg gap-4 text-gray-500">
          {actions.map((item) => (
            <Box key={item.id} className="cursor-pointer">
              {item.icon}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default CommentInput;
