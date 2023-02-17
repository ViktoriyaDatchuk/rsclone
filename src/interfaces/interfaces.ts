export interface HeaderListType {
  [Счета: string]: string[];
  Расходы: string[];
  Доходы: string[];
  'Кредиты и Долги': string[];
  Планирование: string[];
  'Банковские вклады': string[];
}

export enum AccountsTransaction {
  Add = 'Добавление',
  Change = 'Редактирование',
}

export interface UserFooter {
   name: string;
   link: string;
   img: string;
 }
