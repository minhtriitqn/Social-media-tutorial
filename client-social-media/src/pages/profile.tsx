import { useMemo } from 'react';

import { Box } from '@chakra-ui/react';
import { BiCake, BiPhone } from 'react-icons/bi';
import { FaRegHeart } from 'react-icons/fa';
import {
  MdOutlineAddHomeWork,
  MdOutlineBook,
  MdOutlineHome,
  MdOutlineMailOutline,
  MdOutlineTimer,
} from 'react-icons/md';
import { v4 as uuidv4 } from 'uuid';

import { CreatePost } from '@/components';
import {
  CoverImage,
  Information,
  ListFriend,
  ListPhoto,
  Navbar,
  ProfileAvatar,
} from '@/features';
import { useQueryInfoUser } from '@/features/auth';
import { converDateToString } from '@/utils';

export const Profile = () => {
  const { data } = useQueryInfoUser();

  const informationUser = useMemo(() => {
    if (data) {
      const result = [
        {
          id: uuidv4(),
          icon: <MdOutlineHome />,
          name: data.getInfoUser.address,
        },
        {
          id: uuidv4(),
          icon: <MdOutlineAddHomeWork />,
          name: data.getInfoUser.company,
        },
        {
          id: uuidv4(),
          icon: <MdOutlineBook />,
          name: data.getInfoUser.university,
        },
        {
          id: uuidv4(),
          icon: <FaRegHeart />,
          name: data.getInfoUser.relationship,
        },
        {
          id: uuidv4(),
          icon: <BiCake />,
          name: data.getInfoUser.dayOfBirth,
        },
        {
          id: uuidv4(),
          icon: <BiPhone />,
          name: data.getInfoUser.phone,
        },
        {
          id: uuidv4(),
          icon: <MdOutlineMailOutline />,
          name: data.getInfoUser.email,
        },
        {
          id: uuidv4(),
          icon: <MdOutlineTimer />,
          name: converDateToString(data.getInfoUser.createdAt as Date),
        },
      ];
      return result;
    }
  }, [data]);

  return (
    <Box>
      <Box className="relative z-10">
        <CoverImage />
        <Box className="hidden md:block">
          <Navbar />
        </Box>
      </Box>
      <Box className="flex w-full justify-center items-center absolute top-2/4 bg-white">
        <Box className="flex flex-col gap-4 w-5/6 md:w-full md:flex-row md:mx-4 lg:w-5/6 xl:w-4/6">
          <Box className="w-full md:w-1/4 z-20">
            <ProfileAvatar
              avatarLink={data?.getInfoUser.avatar}
              fullnameUser={data?.getInfoUser.fullname as string}
              description={data?.getInfoUser.description}
            />
            <Information informationUser={informationUser} />
            <ListPhoto />
            <ListFriend />
          </Box>
          <Box className="block md:hidden">
            <Navbar />
          </Box>
          <Box className="w-full md:w-3/4 md:mt-[280px]">
            <CreatePost />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
