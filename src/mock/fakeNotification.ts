import Notification from '@/models/Notification';

const fakeNotifications: Notification[] = [
  {
    id: 1,
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    createdAt: new Date(),
    read: false,
    user: {
      id: 1,
      email: 'fake@a.it',
      name: 'Mario',
      surname: 'Rossi',
    },
  },
  {
    id: 2,
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    createdAt: new Date(),
    read: false,
    user: {
      id: 2,
      email: 'fake@b.it',
      name: 'Giuseppe',
      surname: 'Battaglia',
    },
  },
  {
    id: 3,
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    createdAt: new Date(),
    read: false,
    user: {
      id: 1,
      email: 'fake@a.it',
      name: 'Mario',
      surname: 'Rossi',
    },
  },
];

export default fakeNotifications;
