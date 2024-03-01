import { ChangeEvent, useMemo, useState } from 'react';

import {
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  Image,
  Input,
  Text,
} from '@chakra-ui/react';
import { IoCloseSharp } from 'react-icons/io5';
import { v4 as uuidv4 } from 'uuid';

import { optionInput } from '../constant';
import { useQueryInfoUser } from '@/features/auth';
import { PostType, FileType } from '@/ts/types';

export const CreatePost = () => {
  const [files, setFiles] = useState<FileType[]>([]);
  const [content, setContent] = useState('');
  const [listPost, setListPost] = useState<PostType[]>([]);

  const { data } = useQueryInfoUser();

  const authPost = useMemo(() => {
    if (data) {
      const result = {
        avatar: data.getInfoUser.avatar,
        id: data.getInfoUser.id,
      };
      return result;
    }
  }, [data]);

  const handleChooseFiles = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files;
    if (file) {
      const filesList = Array.from(file).map((item) => ({
        id: uuidv4(),
        file: URL.createObjectURL(item),
      }));
      setFiles((prevFiles) => [...prevFiles, ...filesList]);
    }
  };

  const handleDeleteFile = (id: string) => {
    setFiles((prevFiles) => {
      return prevFiles.filter((file) => file.id !== id);
    });
  };

  const handleContentValue = (e: ChangeEvent<HTMLInputElement>) => {
    const content = e.target.value;
    setContent(content);
  };

  const handleCreatePost = () => {
    const newPost: PostType = {
      id: uuidv4(),
      listFile: files,
      content: content,
    };
    const fakeListPost = listPost;
    setListPost([...fakeListPost, newPost]);
    localStorage.setItem('Posts', JSON.stringify([...fakeListPost, newPost]));
    setFiles([]);
    setContent('');
  };

  const options = optionInput.slice(0, 4);

  return (
    <Box className="bg-white mt-4 p-4 rounded-lg border-2">
      <Box className="flex items-center gap-4">
        <Avatar src={authPost?.avatar} />
        <Text className="text-gray-500">Share something...</Text>
      </Box>
      <Grid
        className="mt-4"
        templateColumns={{ sm: 'repeat(2,1fr)', md: 'repeat(3,1fr)' }}
        gap={2}
      >
        {files &&
          files.map((item) => (
            <Box key={item.id} className="relative group">
              <Image src={item.file} className="w-full h-[150px] rounded-md" />
              <IoCloseSharp
                className="text-3xl cursor-pointer absolute top-2 right-0 -translate-x-1/2 hidden group-hover:block transform hover:rotate-[45deg] hover:scale-105 hover:duration-300 text-red-700"
                onClick={() => handleDeleteFile(item.id)}
              />
            </Box>
          ))}
      </Grid>
      <Input
        placeholder="Insert your content"
        className="!border-0 !outline-none w-full mt-4"
        onChange={handleContentValue}
      />
      <Divider className="mb-4" />
      <Box className="flex justify-between items-center">
        <Box className="flex gap-4 text-2xl text-gray-500">
          {options.map((item) => (
            <div key={item.id}>
              <label htmlFor={item.value}>
                <Box className="cursor-pointer">{item.icon}</Box>
              </label>
              <Input
                multiple
                type="file"
                name={item.value}
                id={item.value}
                accept={item.value}
                className="hidden"
                onChange={(e) => handleChooseFiles(e)}
              />
            </div>
          ))}
        </Box>
        <Button colorScheme="twitter" size="sm" onClick={handleCreatePost}>
          Post
        </Button>
      </Box>
    </Box>
  );
};
