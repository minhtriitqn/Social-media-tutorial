import { Box, Divider, Text } from '@chakra-ui/react';

import { EditProfile } from './edit-profile';

type Props = {
  informationUser: {
    icon?: JSX.Element;
    name?: string;
    id: string;
  }[];
};

export const Information = ({ informationUser }: Props) => {
  return (
    <Box className="bg-white mt-4 p-4 rounded-lg border-2">
      <Box className="flex justify-between items-center">
        <Text className="font-bold">Information</Text>
        <EditProfile />
      </Box>
      <Divider className="my-2" />
      <Box>
        {informationUser?.map((item) => (
          <Box key={item.id} className="flex items-center gap-2 mb-2">
            <Box className="text-xl">{item.icon}</Box>
            <Text className="text-gray-600 w-11/12 truncate">{item.name}</Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
