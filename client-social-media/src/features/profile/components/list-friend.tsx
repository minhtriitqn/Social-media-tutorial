import { Box, Divider, Text } from '@chakra-ui/react';

import { Contact } from '@/components';
import { datas } from '@/data';

export const ListFriend = () => {
  const listFriends = datas.slice(0, 10);

  return (
    <Box className="bg-white mt-4 p-4 rounded-lg border-2">
      <Box className="flex justify-between">
        <Text className="font-bold">List friends</Text>
        <Text className="text-green-900 font-bold cursor-pointer">See all</Text>
      </Box>
      <Divider className="my-2" />
      {listFriends.map((item) => (
        <Contact
          key={item.id}
          name={item.name}
          state={item.state}
          thumb={item.thumb}
        />
      ))}
    </Box>
  );
};
