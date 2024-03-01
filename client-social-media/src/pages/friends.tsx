import { useEffect, useState } from 'react';

import { Box, Grid, GridItem, Text } from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';

import { avataa } from '@/assets';
import { FriendSideBar, Friend } from '@/features';
import NavbarLayout from '@/layout/navbar-layout';

const friends = [
  {
    id: uuidv4(),
    name: 'Kim Cuong',
    thumb: avataa,
    isFriend: true,
  },
  {
    id: uuidv4(),
    name: 'Kim Cuong',
    thumb: avataa,
    isFriend: false,
  },
  {
    id: uuidv4(),
    name: 'Kim Cuong',
    thumb: avataa,
    isFriend: false,
  },
  {
    id: uuidv4(),
    name: 'Kim Cuong',
    thumb: avataa,
    isFriend: true,
  },
  {
    id: uuidv4(),
    name: 'Kim Cuong',
    thumb: avataa,
    isFriend: false,
  },
  {
    id: uuidv4(),
    name: 'Kim Cuong',
    thumb: avataa,
    isFriend: true,
  },
  {
    id: uuidv4(),
    name: 'Kim Cuong',
    thumb: avataa,
    isFriend: false,
  },
  {
    id: uuidv4(),
    name: 'Kim Cuong',
    thumb: avataa,
    isFriend: true,
  },
  {
    id: uuidv4(),
    name: 'Kim Cuong',
    thumb: avataa,
    isFriend: false,
  },
  {
    id: uuidv4(),
    name: 'Kim Cuong',
    thumb: avataa,
    isFriend: true,
  },
  {
    id: uuidv4(),
    name: 'Kim Cuong',
    thumb: avataa,
    isFriend: false,
  },
];

export const Friends = () => {
  const [totalFriendRequest, setTotalFriendRequest] = useState(0);
  const [totalFriend, setTotalFriend] = useState(0);

  const friendRequest = friends.filter((item) => item.isFriend == false);
  const listFriends = friends.filter((item) => item.isFriend == true);

  useEffect(() => {
    const totalFriendRequest = friendRequest.reduce((total, user) => {
      if (user.isFriend === false) {
        return total + 1;
      } else {
        return total;
      }
    }, 0);
    setTotalFriendRequest(totalFriendRequest);
  }, [friendRequest]);

  useEffect(() => {
    const allFriends = listFriends.reduce((total, user) => {
      if (user.isFriend === true) {
        return total + 1;
      } else {
        return total;
      }
    }, 0);
    setTotalFriend(allFriends);
  }, [listFriends]);

  return (
    <NavbarLayout navBarChildren={<FriendSideBar />}>
      <Box className="w-full flex justify-center items-center">
        <Box className="w-11/12">
          <Text className="my-6 font-bold text-3xl">
            Friend Request: {totalFriendRequest}
          </Text>
          <Grid templateColumns="repeat(6, 1fr)" gap={6} className="w-full">
            {friendRequest.map((item) => (
              <GridItem key={item.id}>
                <Friend
                  isFriend={item.isFriend}
                  name={item.name}
                  thumb={item.thumb}
                />
              </GridItem>
            ))}
          </Grid>
          <Text className="my-6 font-bold text-3xl">
            All Friends: {totalFriend}
          </Text>
          <Grid templateColumns="repeat(6, 1fr)" gap={6} className="w-full">
            {listFriends.map((item) => (
              <GridItem key={item.id}>
                <Friend
                  isFriend={item.isFriend}
                  name={item.name}
                  thumb={item.thumb}
                />
              </GridItem>
            ))}
          </Grid>
        </Box>
      </Box>
    </NavbarLayout>
  );
};
