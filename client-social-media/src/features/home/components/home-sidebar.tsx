import { Avatar, Box, Image, Text } from '@chakra-ui/react';

import { avatar1, menu } from '@/assets';
import { healt, design, develop, game } from '@/assets';

const topics = [
  {
    icon: game,
    name: 'Game',
  },
  {
    icon: design,
    name: 'Design',
  },

  {
    icon: healt,
    name: 'Healt',
  },
  {
    icon: develop,
    name: 'Develop',
  },
  {
    icon: menu,
    name: 'More Topics',
  },
];
const trends = [
  {
    name: 'Wash Hand',
    totalPost: 400,
  },
  {
    name: 'Phi Phai',
    totalPost: 260,
  },
  {
    name: 'Study',
    totalPost: 572,
  },
  {
    name: 'Code tools',
    totalPost: 832,
  },
  {
    name: 'Chill',
    totalPost: 382,
  },
];

export const HomeSideBar = () => {
  const sortTrends = trends.sort((a, b) => b.totalPost - a.totalPost);
  return (
    <Box>
      <Box className="flex items-center gap-2">
        <Avatar src={avatar1} size="sm" />
        <Text fontSize="sm" className="font-bold">
          Kim Cuong
        </Text>
      </Box>
      <Text className="uppercase my-4 text-violet-800 font-bold" fontSize="sm">
        popular topics
      </Text>
      {topics.map((item) => (
        <Box
          key={item.name}
          className="flex gap-4 items-center my-6 cursor-pointer"
        >
          <Image src={item.icon} boxSize="30px" />
          <Text>{item.name}</Text>
        </Box>
      ))}
      <Text className="uppercase my-4 text-violet-800 font-bold" fontSize="sm">
        Trend for you
      </Text>
      {sortTrends.map((item) => (
        <Box key={item.name} className="my-3">
          <Text className="font-bold" fontSize="sm">
            {item.name}
          </Text>
          <Text className="text-gray-500" fontSize="xs">
            {item.totalPost} Post
          </Text>
        </Box>
      ))}
    </Box>
  );
};
