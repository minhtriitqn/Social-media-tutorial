import { FC } from 'react';

import { Box, Button, IconButton, Image, Text } from '@chakra-ui/react';
import { BiCalendar, BiLocationPlus, BiTag } from 'react-icons/bi';

type Props = {
  thumb: string;
  name: string;
  date: string;
  time: string;
  location: string;
};

export const Event: FC<Props> = ({ thumb, date, location, name, time }) => {
  return (
    <Box className="bg-white rounded-xl">
      <Image src={thumb} className="w-full h-40 cover rounded-t-xl" />
      <Box className="p-3">
        <Text className="font-bold">{name}</Text>
        <Box className="w-full flex justify-between items-center my-2">
          <Box className="flex justify-center items-center gap-2">
            <BiCalendar className="bg-violet-500 text-3xl text-white p-1 rounded-md" />
            <Text className="text-gray-500">{date}</Text>
          </Box>
          <Text className="text-gray-500">{time}</Text>
        </Box>
        <Box className="flex items-center gap-2">
          <BiLocationPlus className="bg-violet-500 text-3xl text-white p-1 rounded-md" />
          <Text className="text-gray-500">{location}</Text>
        </Box>
        <Box className="mt-4 w-full flex gap-2">
          <Button className="w-full">See Detail</Button>
          <IconButton
            variant="outline"
            colorScheme="teal"
            aria-label="Send email"
            icon={<BiTag />}
          />
        </Box>
      </Box>
    </Box>
  );
};
