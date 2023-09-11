import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddressPage = () => {
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const navigate = useNavigate();
  

  const handleSubmit = () => {
    navigate('/'); 
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  useEffect(() => {
  
    document.body.style.overflow = 'hidden';

    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="bg-white text-black min-h-screen p-4 flex flex-col justify-center items-center">
      <h2 className="text-2xl text-black mb-4">Address and Payment Details</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-black text-sm font-bold mb-2" htmlFor="address">
            Address:
          </label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="bg-gray-200 border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:bg-white focus:border-indigo-500"
            id="address"
            placeholder="Enter your address"
            required
          />
        </div>
        <div>
          <label className="block text-black text-sm font-bold mb-2" htmlFor="phoneNumber">
            Phone Number:
          </label>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="bg-gray-200 border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:bg-white focus:border-indigo-500"
            id="phoneNumber"
            placeholder="Enter your phone number"
            required
          />
        </div>
        <div>
          <label className="block text-black text-sm font-bold mb-2" htmlFor="paymentMethod">
            Payment Method:
          </label>
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="bg-gray-200 border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:bg-white focus:border-indigo-500"
            id="paymentMethod"
            required
          >
            <option value="">Select a payment method</option>
            <option value="credit-card">Credit Card</option>
            <option value="paypal">Paytm</option>
            <option value="paypal">Gpay</option>
        
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-black py-2 px-4 rounded mt-4"
        >
          Place Order
        </button>
        <button
          type="button"
          onClick={handleGoBack}
          className="bg-red-500 hover:bg-red-600 text-black py-2 px-4 rounded mt-2"
        >
          Go Back
        </button>
      </form>
    </div>
  );
};

export default AddressPage;
