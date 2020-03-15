import constants from '@/constants';

export default class UserService {
  public static login(email: string, password: string): Promise<void> {
    console.log({ email, password });
    return new Promise((resolve) => {
      // Fake bearer token
      localStorage.setItem(constants.LOCALSTORAGE_TOKEN_KEY,
        Math.random().toString(36).substring(2, 15)
        + Math.random().toString(36).substring(2, 15));
      resolve();
    });
  }

  public static logout(): void {
    localStorage.clear();
  }

  public static isLogged(): boolean {
    return !!(localStorage.getItem(constants.LOCALSTORAGE_TOKEN_KEY));
  }
}
