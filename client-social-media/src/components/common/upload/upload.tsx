import { FC, useEffect, useMemo, useState } from 'react';

import { Box, Input, Text } from '@chakra-ui/react';
import { LuUploadCloud } from 'react-icons/lu';

import {
  useUploadMultipleFilesMutation,
  useUploadSingleFileMutation,
} from '@/hooks';

type Props = {
  setValue: (_v: string[]) => void;
};

export const Upload: FC<Props> = ({ setValue }) => {
  const [filesUpload, setFilesUpload] = useState<FileList | null>();

  const [uploadSingleFiles] = useUploadSingleFileMutation();
  const [uploadMultipleFiles] = useUploadMultipleFilesMutation();

  const imagePreview = useMemo(() => {
    if (filesUpload) {
      const result = [];
      for (const file of filesUpload) {
        result.push(URL.createObjectURL(file));
      }
      return result;
    }
    return null;
  }, [filesUpload]);

  useEffect(() => {
    if (filesUpload) {
      if (filesUpload.length === 1) {
        // TODO: CAll api upload single
        void uploadSingleFiles({
          variables: { file: filesUpload[0] },
          onCompleted: (data) => {
            setValue && setValue(data.uploadSingleFiles.url);
          },
        });
      } else {
        // TODO: Call api upload multiple
        void uploadMultipleFiles({
          variables: {
            files: [filesUpload],
          },
          onCompleted: (data) => {
            setValue && setValue(data.uploadMultipleFiles.url);
          },
        });
      }
      setValue([]);
    }
  }, [filesUpload, setValue, uploadSingleFiles, uploadMultipleFiles]);

  return (
    <>
      {imagePreview &&
        imagePreview.map((url) => <img key={url} src={url} alt="pic" />)}
      <Box className="border-dotted border-4 border-sky-500 flex justify-center items-center py-10 rounded-lg ">
        <label
          htmlFor="upload"
          className="w-full h-full flex flex-col justify-center items-center cursor-pointer"
        >
          <LuUploadCloud className="text-6xl" />
          <Text className="font-bold">Choose your image</Text>
        </label>
      </Box>
      <Input
        className="hidden"
        id="upload"
        type="file"
        onChange={(e) => {
          if (e.target.files) {
            setFilesUpload(e.target.files);
          }
        }}
      />
    </>
  );
};
