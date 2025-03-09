export default function CartItems({ cart }) {

const Totaldiscountprice=cart.reduce((total,item)=>total+item.discountPrice,0);

const handleCheckout = () => {


  window.location.href = "https://www.stripe.com";
};

    return (
      <div className="sm:text-emerald-600 md:text-red  lg:text-black"> 
        <h2 className="text-xl font-bold mb-4">Cart Items</h2>
        {cart.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index} className="border-b py-2 flex justify-between">
                <span>{item.name}</span>
                <span className="">${item.discountPrice}</span>
              </li>
            ))}
          </ul>
       
         
        )}
        <div className="mt-4 flex justify-between">
        <span> Price: </span> 
        <span className="text-green-600  font-bold">{Totaldiscountprice}</span> 
        </div>
       <button   onClick={handleCheckout} className="p-2 bg-blue-200 mt-6 rounded-lg cursor-pointer transition-transform hover:scale-105 duration-300 ease-in-out ml-7">Proceed to checkout</button>
      </div>
    );
  }
  