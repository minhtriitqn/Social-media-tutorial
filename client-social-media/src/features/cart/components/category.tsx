import { FC } from 'react';

import { Box, Image, Text } from '@chakra-ui/react';

import { CartType } from '@/ts/types';

export const Category: FC<CartType> = ({ location, name, price, thumb }) => {
  return (
    <Box className="w-full">
      <Image src={thumb} className="w-full h-60 rounded-xl" />
      <Text className="text-xl font-bold my-2">USD $ {price}</Text>
      <Text className="text-lg ">{name}</Text>
      <Text className="text-gray-500">{location}</Text>
    </Box>
  );
};
