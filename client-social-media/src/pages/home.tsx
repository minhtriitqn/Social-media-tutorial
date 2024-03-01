import { useState } from 'react';

import { Box } from '@chakra-ui/react';

import { CreatePost } from '@/components';
import { Post, RightNavBar, HomeSideBar } from '@/features';
import NavbarLayout from '@/layout/navbar-layout';
import { PostType } from '@/ts/types';

export const Home = () => {
  const [listPost] = useState<PostType[]>(
    localStorage.getItem('Posts')
      ? (JSON.parse(localStorage.getItem('Posts') as string) as PostType[])
      : [],
  );

  return (
    <NavbarLayout navBarChildren={<HomeSideBar />}>
      <Box className="flex w-full justify-between">
        <Box className="hidden md:block"></Box>
        <Box className="w-full lg:w-11/12 xl:w-8/12 overflow-y-scroll h-screen no-scrollbar">
          <CreatePost />
          {listPost.map((item) => (
            <Post
              key={item.id}
              content={item.content}
              listFile={item.listFile}
            />
          ))}
        </Box>
        <Box className="hidden md:block"></Box>
        <RightNavBar className="w-3/12" />
      </Box>
    </NavbarLayout>
  );
};
