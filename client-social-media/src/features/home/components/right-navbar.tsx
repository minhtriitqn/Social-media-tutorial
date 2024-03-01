import { useEffect, useState } from 'react';

import { Box, Divider, IconButton, Text } from '@chakra-ui/react';
import { LuSearch } from 'react-icons/lu';

import { Contact } from '@/components';
import { datas } from '@/data';

type Props = {
  className?: string;
};

export const RightNavBar = ({ className }: Props) => {
  const [totalOnline, setTotalOnline] = useState(0);

  useEffect(() => {
    const onTotal = datas.reduce((accumlator, contact) => {
      if (contact.state === 'on') {
        return accumlator + 1;
      }
      return accumlator;
    }, 0);

    setTotalOnline(onTotal);
  }, [totalOnline]);

  return (
    <Box className={`bg-white p-4 w-2/12 hidden xl:block ${className}`}>
      <Box className="flex justify-between items-center">
        <Text className="font-bold">Contact</Text>
        <IconButton
          aria-label="Search database"
          icon={<LuSearch />}
          size="sm"
        />
      </Box>
      <Divider className="my-4" />
      <Text fontSize="sm" className="text-gray-500">
        Online - {totalOnline}
      </Text>
      <Box className="h-screen overflow-y-scroll no-scrollbar">
        {datas.map((item) => (
          <Contact
            key={item.id}
            name={item.name}
            thumb={item.thumb}
            state={item.state}
          />
        ))}
      </Box>
    </Box>
  );
};
