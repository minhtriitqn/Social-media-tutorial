import { Avatar, Box, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import { facebook_logo } from '@/assets';
import { HOME_PATH } from '@/data';

const Logo = () => {
  return (
    <Link to={HOME_PATH}>
      <Box className="flex justify-center items-center gap-4 cursor-pointer">
        <Avatar src={facebook_logo} className="!w-8 !h-8 lg:!w-9 lg:!h-9" />
        <Text fontSize="lg" className="hidden lg:block">
          Facebook
        </Text>
      </Box>
    </Link>
  );
};

export default Logo;
