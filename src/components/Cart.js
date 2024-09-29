import { useSelector } from "react-redux";
import Itemlist from "./Itemlist";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";



const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const HandleClearCart = ()=>{
    //dispatch an action
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-6 p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      <button className="p-2 m-2 bg-black text-white rounded-lg"
        onClick={HandleClearCart}>Clear cart</button>

      {cartItems.length === 0 ? (
        <p className="text-lg text-gray-500">Your cart is empty please add items to you cart</p>
      ) : (
        <div className="mx-auto w-full sm:w-8/12 md:w-6/12 lg:w-4/12 bg-white p-6 rounded-lg shadow-lg">
          <Itemlist  items = {cartItems}/>
        </div>
      )}
    </div>
  );
};

export default Cart;
