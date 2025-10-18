export interface IAddCartBody {
  userId: number;
  products: {
    id: number;
    quantity: number;
  }[];
}
