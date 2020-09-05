import CompleteUser from '@/models/CompleteUser';

const fakeUsers: CompleteUser[] = [
  {
    id: 1,
    email: 'fake@a.it',
    name: 'Mario',
    surname: 'Rossi',
    birthday: new Date(),
    isWorking: true,
    works: ['Google'],
    isStudying: false,
    studies: ['Oxford'],
  },
  {
    id: 2,
    email: 'fake@b.it',
    name: 'Giuseppe',
    surname: 'Battaglia',
    birthday: new Date(),
    isWorking: true,
    works: ['Microsoft', 'Facebook'],
    isStudying: false,
    studies: ['MIT'],
  },
  {
    id: 3,
    email: 'fake@c.it',
    name: 'Lino',
    surname: 'Da Re',
    birthday: new Date(),
    isWorking: false,
    isStudying: true,
    studies: ['Ca\' Foscari'],
  },
];

export default fakeUsers;
