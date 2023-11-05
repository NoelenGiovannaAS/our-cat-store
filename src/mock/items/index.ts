import { IItem } from '@interfaces';

export const itemsMock: IItem[] = [
  {
    id: 1,
    itemName: 'BOLINHA PULA PULA',
    description: 'Bolinha muito bacana.',
    price: 10,
    itemImage: '',
    categoryId: '3',
    quantity: 0,
  },

  {
    id: 2,
    itemName: 'ARRANHADOR FOFINHO',
    description: 'Arranhador muito fofinho.',
    price: 10,
    itemImage: '',
    categoryId: '3',
    quantity: 0,
  },
  {
    id: 3,
    itemName: 'FOFINHO',
    description: 'Arranhador muito fofinho.',
    price: 65,
    itemImage: '',
    categoryId: '3',
    quantity: 0,
  },

  {
    id: 4,
    itemName: 'RAÇÃO PARA GATOS FILHOTES PREMIUM 5kg',
    description: '',
    price: 99,
    itemImage: '',
    categoryId: '1',
    quantity: 0,
  },
  {
    id: 5,
    itemName: 'PASTA DENTÁRIA CANINA SABOR CARNE 60ml',
    description: '',
    price: 30,
    itemImage: 'teste.png',
    categoryId: '2',
    quantity: 0,
  },
];
