import { IItem } from '@interfaces';

export interface ICart {
  items: IItem[];
  total: number;
}
