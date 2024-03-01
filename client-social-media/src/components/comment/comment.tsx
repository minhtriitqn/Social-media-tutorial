import { useState } from 'react';

import { Avatar, Box, Text } from '@chakra-ui/react';
import { BiHeart } from 'react-icons/bi';

import CommentInput from './component/comment-input';

export const Comment = () => {
  const [reply, setReply] = useState(false);

  const toggleOpenReply = () => {
    setReply(!reply);
  };
  return (
    <Box className="flex gap-2">
      <Avatar src="" size="sm" />
      <Box>
        <Text className="font-bold" fontSize="sm">
          Kim Cuong
        </Text>
        <Text fontSize="xs" className="text-gray-500">
          30m
        </Text>
        <Text fontSize="sm" className="mt-2 gap-1 w-full flex flex-wrap">
          Em dep qua !!! <BiHeart />
        </Text>
        <Box className="flex gap-2 text-gray-400">
          <Text
            fontSize="xs"
            className="cursor-pointer"
            onClick={() => toggleOpenReply()}
          >
            Reply
          </Text>
          <Text fontSize="xs" className="cursor-pointer">
            Like
          </Text>
        </Box>
        {reply && <CommentInput />}
      </Box>
    </Box>
  );
};
