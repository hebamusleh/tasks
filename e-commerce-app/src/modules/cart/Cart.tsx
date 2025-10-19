import { Button } from "../../components";

const Cart = () => {
  return (
    <div className="container my-20 ">
      <div className="flex flex-col gap-10 lg:gap-20">
        <div>
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
                <tr className="flex justify-between items-center h-[72px] box-shadow mb-[40px]">
                  <td className="min-w-[200px]">
                    <div className="flex items-center gap-2">
                      <div className="w-[50px] h-[50px]">
                        <img
                          src="/assets/images/jacket.png"
                          alt="jacket"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>product name</div>
                    </div>
                  </td>
                  <td className="min-w-[100px] text-center">$650</td>
                  <td className="min-w-[100px] flex items-center justify-center">
                    <input
                      type="number"
                      className="w-[72px] h-[44px] rounded-[4px] border-[1px] border-black/50 p-3 outline-none"
                    />
                  </td>
                  <td className="min-w-[100px] text-center">$650</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex justify-between">
            <Button variant="outline">Return To Shop</Button>
            <Button variant="outline">Update Cart</Button>
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
              <span>$1750</span>
            </div>
            <div className="w-full flex justify-between py-4 border-b-[1px] ">
              <span className="text-black">Shipping:</span>
              <span>$1750</span>
            </div>
            <div className="w-full flex justify-between py-4">
              <span className="text-black">Total:</span>
              <span>$1750</span>
            </div>
            <div className="flex items-center justify-center">
              <Button>Procees to checkout</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
