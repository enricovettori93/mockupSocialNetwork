import constants from '@/constants';
import User from '@/models/User';
import CompleteUser from '@/models/CompleteUser';
import fakeUsers from '@/mock/fakeUser';

export default class UserService {
  public static login(email: string, password: string): Promise<CompleteUser> {
    console.log({ email, password });
    return new Promise((resolve) => {
      // Fake login
      localStorage.setItem(constants.LOCALSTORAGE_TOKEN_KEY,
        Math.random().toString(36).substring(2, 15)
        + Math.random().toString(36).substring(2, 15));
      const currentUser = {
        id: 99,
        email: 'test@test.com',
        name: 'test',
        surname: 'test',
        birthday: new Date(),
        isWorking: true,
        works: ['Interlogica', 'Egea tecnologie informatiche'],
        isStudying: false,
        studies: ['Ca\' Foscari', 'ITIS Max Planck'],
      };
      localStorage.setItem(constants.LOCALSTORAGE_USER_KEY, JSON.stringify(currentUser));
      resolve(currentUser);
    });
  }

  public static logout(): Promise<void> {
    return new Promise((resolve) => {
      localStorage.clear();
      resolve();
    });
  }

  public static isLogged(): boolean {
    return !!(localStorage.getItem(constants.LOCALSTORAGE_TOKEN_KEY));
  }

  public static getUser(): User {
    return JSON.parse(`${localStorage.getItem(constants.LOCALSTORAGE_USER_KEY)}`);
  }

  public static fetchUser(id: number): Promise<CompleteUser> {
    return new Promise((resolve, reject) => {
      const response = fakeUsers.find((item) => item.id === id);
      (response) ? resolve(response) : reject();
    });
  }
}
