export interface IItem {
  id: number;
  itemName: string;
  description: string;
  price: number;
  itemImage: string;
  categoryId: string;
  available?: string;
  quantity: number;
}

export interface ICartItem {
  item: IItem;
  quantity: number;
}
