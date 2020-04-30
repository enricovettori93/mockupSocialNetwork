import {languages} from '@/translations/translations';

export default class LanguageService {
  public static switchLanguage(vm: any): void {
    vm.$i18n.locale = this.getOtherLanguage(vm.$i18n.locale);
  }

  private static getOtherLanguage(lang: string): string {
    return lang === languages.IT ? languages.EN : languages.IT;
  }
}
