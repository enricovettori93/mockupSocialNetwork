import Feed from '../models/Feed';

const fakeFeeds: Feed[] = [
  {
    id: 1,
    title: 'Prova titolo 1',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet, sem ut ultrices pulvinar, mi odio interdum risus, eu euismod lectus sapien eu massa. Donec quis pulvinar nibh. Mauris eget erat tristique, suscipit enim ut, aliquet tortor. Suspendisse lacus orci, consequat quis magna a, mattis feugiat ligula',
    hasLike: false,
    createdAt: new Date(),
    writtenBy: {
      id: 1,
      email: 'fake@a.it',
      name: 'Mario',
      surname: 'Rossi',
    },
  },
  {
    id: 2,
    title: 'Prova titolo 2',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet, sem ut ultrices pulvinar, mi odio interdum risus, eu euismod lectus sapien eu massa. Donec quis pulvinar nibh. Mauris eget erat tristique, suscipit enim ut, aliquet tortor. Suspendisse lacus orci, consequat quis magna a, mattis feugiat ligula',
    hasLike: false,
    createdAt: new Date(),
    comments: [
      {
        id: 1,
        content: 'Prova commento a titolo 2',
        createdAt: new Date(),
        writtenBy: {
          id: 1,
          email: 'fake@a.it',
          name: 'Mario',
          surname: 'Rossi',
        },
      },
    ],
    writtenBy: {
      id: 2,
      email: 'fake@b.it',
      name: 'Giuseppe',
      surname: 'Battaglia',
    },
  },
  {
    id: 3,
    title: 'Prova titolo 3',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet, sem ut ultrices pulvinar, mi odio interdum risus, eu euismod lectus sapien eu massa. Donec quis pulvinar nibh. Mauris eget erat tristique, suscipit enim ut, aliquet tortor. Suspendisse lacus orci, consequat quis magna a, mattis feugiat ligula',
    hasLike: false,
    createdAt: new Date(),
    writtenBy: {
      id: 3,
      email: 'fake@c.it',
      name: 'Lino',
      surname: 'Da Re',
    },
  },
  {
    id: 4,
    title: 'Prova titolo 4',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet, sem ut ultrices pulvinar, mi odio interdum risus, eu euismod lectus sapien eu massa. Donec quis pulvinar nibh. Mauris eget erat tristique, suscipit enim ut, aliquet tortor. Suspendisse lacus orci, consequat quis magna a, mattis feugiat ligula',
    hasLike: false,
    createdAt: new Date(),
    writtenBy: {
      id: 3,
      email: 'fake@c.it',
      name: 'Lino',
      surname: 'Da Re',
    },
  },
  {
    id: 5,
    title: 'Prova titolo 5',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet, sem ut ultrices pulvinar, mi odio interdum risus, eu euismod lectus sapien eu massa. Donec quis pulvinar nibh. Mauris eget erat tristique, suscipit enim ut, aliquet tortor. Suspendisse lacus orci, consequat quis magna a, mattis feugiat ligula',
    hasLike: false,
    createdAt: new Date(),
    writtenBy: {
      id: 3,
      email: 'fake@c.it',
      name: 'Lino',
      surname: 'Da Re',
    },
  },
  {
    id: 6,
    title: 'Prova titolo 6',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet, sem ut ultrices pulvinar, mi odio interdum risus, eu euismod lectus sapien eu massa. Donec quis pulvinar nibh. Mauris eget erat tristique, suscipit enim ut, aliquet tortor. Suspendisse lacus orci, consequat quis magna a, mattis feugiat ligula',
    hasLike: false,
    createdAt: new Date(),
    writtenBy: {
      id: 3,
      email: 'fake@c.it',
      name: 'Lino',
      surname: 'Da Re',
    },
  },
];

export default fakeFeeds;
