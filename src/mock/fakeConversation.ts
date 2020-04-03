import Conversation from '@/models/Conversation';

const fakeConversations: Conversation[] = [
  {
    id: 1,
    createdAt: new Date(),
    user: {
      id: 1,
      email: 'fake@a.it',
      name: 'Mario',
      surname: 'Rossi',
    },
    messages: [
      {
        id: 1,
        writtenBy: {
          id: 1,
          email: 'fake@a.it',
          name: 'Mario',
          surname: 'Rossi',
        },
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet, sem ut ultrices pulvinar, mi odio interdum risus',
        createdAt: new Date(),
      },
      {
        id: 4,
        writtenBy: {
          id: 99,
        },
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet, sem ut ultrices pulvinar, mi odio interdum risus',
        createdAt: new Date(),
      },
    ],
  },
  {
    id: 2,
    createdAt: new Date(),
    user: {
      id: 2,
      email: 'fake@b.it',
      name: 'Giuseppe',
      surname: 'Battaglia',
    },
    messages: [
      {
        id: 2,
        writtenBy: {
          id: 2,
          email: 'fake@b.it',
          name: 'Giuseppe',
          surname: 'Battaglia',
        },
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet, sem ut ultrices pulvinar, mi odio interdum risus',
        createdAt: new Date(),
      },
      {
        id: 2,
        writtenBy: {
          id: 2,
          email: 'fake@b.it',
          name: 'Giuseppe',
          surname: 'Battaglia',
        },
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet, sem ut ultrices pulvinar, mi odio interdum risus',
        createdAt: new Date(),
      },
      {
        id: 3,
        writtenBy: {
          id: 2,
          email: 'fake@b.it',
          name: 'Giuseppe',
          surname: 'Battaglia',
        },
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet, sem ut ultrices pulvinar, mi odio interdum risus',
        createdAt: new Date(),
      },
    ],
  },
];

export default fakeConversations;
