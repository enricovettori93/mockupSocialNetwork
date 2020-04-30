import Feed from '../models/Feed';

const fakeFeeds: Feed[] = [
  {
    id: 1,
    title: 'Prova titolo 1',
    type: 'image',
    url: 'https://cdn.pixabay.com/photo/2019/07/31/19/21/hare-4375952_960_720.jpg',
    content: 'Test content',
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
    type: 'post',
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
    type: 'post',
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
    type: 'post',
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
    type: 'post',
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
    type: 'post',
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
