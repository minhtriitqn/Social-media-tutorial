import { Box, Divider, Image, Text, Grid } from '@chakra-ui/react';

import {
  avataa,
  avatar1,
  avatar2,
  anh1,
  anh2,
  anh3,
  anh4,
  anh5,
  anh6,
} from '@/assets';

const listImage = [
  avataa,
  avatar1,
  avatar2,
  anh1,
  anh2,
  anh3,
  anh4,
  anh5,
  anh6,
];

export const ListPhoto = () => {
  return (
    <Box className="bg-white mt-4 p-4 rounded-lg border-2">
      <Box className="flex justify-between">
        <Text className="font-bold">Photos and Videos</Text>
        <Text className="text-green-900 font-bold cursor-pointer">See all</Text>
      </Box>
      <Divider className="my-2" />
      <Grid
        templateRows="repeat(3, 1fr)"
        templateColumns="repeat(3, 1fr)"
        gap={2}
      >
        {listImage.map((item) => (
          <Image
            key={item}
            src={item}
            className="w-full h-full bg-cover rounded-md cursor-pointer"
          />
        ))}
      </Grid>
    </Box>
  );
};
