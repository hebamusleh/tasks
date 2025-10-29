/* eslint-disable @typescript-eslint/no-explicit-any */
export interface CartState {
  cart: any[];
  addToCart: (product: any) => void;
  updateQuantity: (id: string, quantity: number) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
}
