import { Box } from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';

import { video } from '@/assets';
import { Post, VideoSideBar } from '@/features';
import NavbarLayout from '@/layout/navbar-layout';

const videoDatas = [
  {
    id: uuidv4(),
    content: 'Toi cho em',
    typePost: 'video',
    videoSrc: video,
  },
  {
    id: uuidv4(),
    content: 'Toi cho em',
    typePost: 'video',
    videoSrc: video,
  },
  {
    id: uuidv4(),
    content: 'Toi cho em',
    typePost: 'video',
    videoSrc: video,
  },
];

export const Video = () => {
  return (
    <NavbarLayout navBarChildren={<VideoSideBar />}>
      <Box className="w-full flex flex-col justify-center items-center h-screen overflow-y-scroll no-scrollbar">
        <Box className="lg:w-11/12 xl:w-9/12">
          {videoDatas.map((item) => (
            <Post
              key={item.id}
              content={item.content}
              videoSrc={item.videoSrc}
              typePost="video"
            />
          ))}
        </Box>
      </Box>
    </NavbarLayout>
  );
};
