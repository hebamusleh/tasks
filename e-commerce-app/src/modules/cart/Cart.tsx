import { useNavigate } from "react-router-dom";
import { Button } from "../../components";
import { PATHS } from "../../enums";
import { useCartStore } from "../../store";

const Cart = () => {
  const navigate = useNavigate();
  const { cart, removeFromCart, updateQuantity } = useCartStore();
  const subTotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="container my-20 ">
      <div className="flex flex-col gap-10 lg:gap-20">
        <div>
          {cart.length > 0 ? (
            <div className="overflow-auto">
              <table className="w-full">
                <thead>
                  <tr className="flex justify-between items-center h-[72px] w-full box-shadow mb-[40px]">
                    <th className="text-[16px] font-normal min-w-[200px]">
                      Product
                    </th>
                    <th className="text-[16px] font-normal min-w-[100px]">
                      Price
                    </th>
                    <th className="text-[16px] font-normal min-w-[100px]">
                      Quantity
                    </th>
                    <th className="text-[16px] font-normal min-w-[100px]">
                      Subtotal
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item) => {
                    return (
                      <tr className="flex justify-between items-center h-[72px] box-shadow mb-[40px]">
                        <td className="w-[200px] relative">
                          <div
                            className="absolute -top-[10px] left-0 bg-red-500 w-5  h-5 rounded-full flex items-center justify-center cursor-pointer"
                            onClick={() => removeFromCart(item.id)}
                          >
                            <span className="text-white">x</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-[50px] h-[50px]">
                              <img
                                src={item.cover}
                                alt="jacket"
                                className="w-full h-full object-contain"
                              />
                            </div>
                            <div className="truncate">{item.title}</div>
                          </div>
                        </td>
                        <td className="min-w-[100px] text-center">
                          ${item.price.toFixed(2)}
                        </td>
                        <td className="min-w-[100px] flex items-center justify-center">
                          <input
                            type="number"
                            className="w-[72px] h-[44px] rounded-[4px] border-[1px] border-black/50 p-3 outline-none"
                            value={item.quantity}
                            onChange={(e) =>
                              updateQuantity(item.id, Number(e.target.value))
                            }
                          />
                        </td>
                        <td className="min-w-[100px] text-center">
                          ${(item.price * item.quantity).toFixed(2)}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="mx-auto flex flex-col gap-3 items-center justify-center">
              <div className="w-[120px] h-[120px]">
                <img
                  src="/assets/images/empty-cart.jpg"
                  alt="empty-cart"
                  className="object-cover object-center w-full h-full"
                />
              </div>
              <p className="md:text-xl ">
                Your cart is{" "}
                <span className="text-[#DB4444] font-bold">Empty</span>
              </p>
            </div>
          )}

          <div className="flex justify-between">
            <Button variant="outline" onClick={() => navigate("/")}>
              Return To Shop
            </Button>
            <Button variant="outline" onClick={() => navigate("/")}>
              Update Cart
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-4 md:flex-row w-full justify-between  items-baseline">
          <form className="flex w-full  gap-4">
            <input
              type="text"
              placeholder="Coupon Code"
              className="border-[1px] border-black rounded-[4px] placeholder:text-black/50 h-[56px] px-6 py-4 outline-none w-full md:w-[300px]"
            />
            <Button className="min-w-[125px]">Apply Coupon</Button>
          </form>

          <div className="w-full md:max-w-[470px] border-[1px] border-black rounded-[4px] px-6 py-8">
            <h4 className="font-medium text-xl">Cart Total</h4>
            <div className="w-full flex justify-between py-4 border-b-[1px] ">
              <span className="text-black">Subtotal:</span>
              <span>${subTotal.toFixed(2)}</span>
            </div>
            <div className="w-full flex justify-between py-4 border-b-[1px] ">
              <span className="text-black">Shipping:</span>
              <span>$10</span>
            </div>
            <div className="w-full flex justify-between py-4">
              <span className="text-black">Total:</span>
              <span>${subTotal.toFixed(2) + 10}</span>
            </div>
            <div className="flex items-center justify-center">
              <Button onClick={() => navigate(PATHS.CHECKOUT)}>
                Process to checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
