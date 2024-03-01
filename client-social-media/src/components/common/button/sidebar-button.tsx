import { ReactNode } from 'react';

import { Box, Text } from '@chakra-ui/react';

type Props = {
  buttonName: string;
  buttonIcon: ReactNode;
};

export const SideBarButton = ({ buttonName, buttonIcon }: Props) => {
  return (
    <button className="flex justify-start items-center gap-4 py-3 rounded-lg px-4 font-bold  hover:bg-slate-400 hover:text-white group">
      <Box className="text-green-800 text-2xl group-hover:text-white">
        {buttonIcon}
      </Box>
      <Text>{buttonName}</Text>
    </button>
  );
};
