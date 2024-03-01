import { FC } from 'react';

import {
  Avatar,
  Box,
  Text,
  Image,
  Divider,
  InputGroup,
  Input,
  InputRightElement,
  Grid,
} from '@chakra-ui/react';
import { BiComment, BiLike, BiShare } from 'react-icons/bi';

import { optionInput } from '../constant';
import { avatar1 } from '@/assets';
import { Comment } from '@/components';
import { PostType } from '@/ts/types';

const actionPost = [
  {
    name: 'Likes',
    icon: <BiLike />,
    total: 0,
  },
  {
    name: 'Comments',
    icon: <BiComment />,
    total: 0,
  },
  {
    name: 'Share',
    icon: <BiShare />,
  },
];

export const Post: FC<PostType> = ({
  content,
  listFile,
  typePost,
  videoSrc,
}) => {
  const videoProps = {
    src: videoSrc,
    name: 'header',
    allowFullScreen: true,
    title: 'video',
  };
  return (
    <Box className="bg-white my-4 p-4 rounded-lg border-2">
      <Box className="flex items-center gap-2">
        <Avatar src={avatar1} />
        <Box>
          <Text className="font-bold">Kim Cuong</Text>
          <Text fontSize="xs" className="text-gray-500">
            30m
          </Text>
        </Box>
      </Box>
      <Text className="my-2">{content}</Text>
      {typePost === 'video' ? (
        <video {...videoProps} controls>
          <track src="captions.vtt" kind="captions" label="English" default />
        </video>
      ) : (
        <Grid
          className="my-6"
          templateColumns={{ sm: 'repeat(2,1fr)', md: 'repeat(3,1fr)' }}
          gap={2}
        >
          {listFile &&
            listFile.map((item) => (
              <Image src={item.file} key={item.id} className=" w-full h-40" />
            ))}
        </Grid>
      )}
      <Divider className="mb-4" />
      <Box className="flex justify-between items-center my-4">
        <Box className="w-full flex justify-around">
          {actionPost.map((item) => (
            <Box
              key={item.name}
              className="flex justify-center items-center text-gray-500"
            >
              <Box className="text-md mr-2 cursor-pointer">{item.icon}</Box>
              <Text className="text-md cursor-pointer">
                {item.total}
                {item.name}
              </Text>
            </Box>
          ))}
        </Box>
      </Box>
      <Divider className="mb-4" />
      <Comment />
      <InputGroup className="mt-4">
        <Input type="tel" placeholder="Type your comment" />
        <InputRightElement className="gap-2 text-gray-500 mr-10">
          {optionInput.map((item) => (
            <Box key={item.id} className="cursor-pointer">
              {item.icon}
            </Box>
          ))}
        </InputRightElement>
      </InputGroup>
    </Box>
  );
};
