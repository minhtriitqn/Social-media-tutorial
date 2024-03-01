import { FC } from 'react';

import { Avatar, AvatarBadge, Box, Text } from '@chakra-ui/react';

export type ContactType = {
  id?: number;
  thumb: string;
  name: string;
  state: 'on' | 'off';
};

export const Contact: FC<ContactType> = ({ thumb, name, state }) => {
  return (
    <Box className="flex justify-start items-center gap-4 my-2">
      <Avatar src={thumb} size="sm">
        <AvatarBadge
          borderColor={state === 'off' ? 'papayawhip' : ''}
          bg={state === 'on' ? 'green.500' : 'tomato'}
          boxSize="1.25em"
        />
      </Avatar>
      <Text fontSize="sm" className="font-bold">
        {name}
      </Text>
    </Box>
  );
};
