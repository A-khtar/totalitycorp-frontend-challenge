
import { useCart } from './CartContext';
import { Link, useNavigate } from 'react-router-dom';

const BillingPage = () => {
  const { cartItems, total } = useCart();
  const navigate = useNavigate();

  if (!cartItems) {
    // Handle the case where cartItems is undefined (e.g., loading state)
    return <div>Loading...</div>;
  }

  // Function to continue shopping
  const continueShopping = () => {
    // You can change the path to navigate to a different page
    navigate('/'); // Redirect to the home page (change the path as needed)
  };

  return (
    <div className="bg-black text-blue-500 p-4">
      <h2 className="text-2xl text-white mb-4">Order Summary</h2>
      <ul className="mb-4">
        {cartItems.map((item) => (
          <li key={item.id} className="flex items-center space-x-4">
            <div>
              <p className="text-white">{item.name}</p>
              <p className="text-gray-400">${item.price}</p>
            </div>
          </li>
        ))}
      </ul>
      <p className="text-2xl text-white">Total: ${total}</p>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-4 mr-4"
        onClick={continueShopping}
      >
        Continue 
      
      </button>
      <Link to = "./address">
      <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-4">
        Place Order
      </button>
      </Link>
    </div>
  );
};

export default BillingPage;
