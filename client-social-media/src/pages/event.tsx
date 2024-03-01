import { Box, Text, Grid } from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';

import { avataa } from '@/assets';
import { EventSideBar, Event } from '@/features';
import NavbarLayout from '@/layout/navbar-layout';

const events = [
  {
    id: uuidv4(),
    thumb: avataa,
    name: 'Event UX/UI Design Community with Asset Share',
    date: 'Aug 23, 2022',
    time: '9:00',
    location: 'Event Online',
  },
  {
    id: uuidv4(),
    thumb: avataa,
    name: 'Event UX/UI Design Community with Asset Share',
    date: 'Aug 23, 2022',
    time: '9:00',
    location: 'Event Online',
  },
  {
    id: uuidv4(),
    thumb: avataa,
    name: 'Event UX/UI Design Community with Asset Share',
    date: 'Aug 23, 2022',
    time: '9:00',
    location: 'Event Online',
  },
  {
    id: uuidv4(),
    thumb: avataa,
    name: 'Event UX/UI Design Community with Asset Share',
    date: 'Aug 23, 2022',
    time: '9:00',
    location: 'Event Online',
  },
  {
    id: uuidv4(),
    thumb: avataa,
    name: 'Event UX/UI Design Community with Asset Share',
    date: 'Aug 23, 2022',
    time: '9:00',
    location: 'Event Online',
  },
  {
    id: uuidv4(),
    thumb: avataa,
    name: 'Event UX/UI Design Community with Asset Share',
    date: 'Aug 23, 2022',
    time: '9:00',
    location: 'Event Online',
  },
  {
    id: uuidv4(),
    thumb: avataa,
    name: 'Event UX/UI Design Community with Asset Share',
    date: 'Aug 23, 2022',
    time: '9:00',
    location: 'Event Online',
  },
  {
    id: uuidv4(),
    thumb: avataa,
    name: 'Event UX/UI Design Community with Asset Share',
    date: 'Aug 23, 2022',
    time: '9:00',
    location: 'Event Online',
  },
  {
    id: uuidv4(),
    thumb: avataa,
    name: 'Event UX/UI Design Community with Asset Share',
    date: 'Aug 23, 2022',
    time: '9:00',
    location: 'Event Online',
  },
];

export const Events = () => {
  return (
    <NavbarLayout navBarChildren={<EventSideBar />}>
      <Box className="w-ful mx-10 mt-4">
        <Text className="text-2xl font-bold my-4">Suggested to you</Text>
        <Grid
          templateColumns={{
            sm: 'repeat(2,1fr)',
            md: 'repeat(2,1fr)',
            lg: 'repeat(3,1fr)',
            xl: 'repeat(4, 1fr)',
          }}
          gap={6}
        >
          {events.map((item) => (
            <Event
              key={item.id}
              thumb={item.thumb}
              name={item.name}
              date={item.date}
              time={item.time}
              location={item.location}
            />
          ))}
        </Grid>
      </Box>
    </NavbarLayout>
  );
};
