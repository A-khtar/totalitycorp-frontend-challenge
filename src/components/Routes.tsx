import React from 'react';
import { BrowserRouter as  Routes, Route } from 'react-router-dom';
import { Navbar } from './Navbar';
import BillingPage from './billingPage'; 
import Authorization from './authorization';
import AddressPage from './address';
const MYRoutes: React.FC = () => {
  return (
    <>
    
      <Routes>
      <Route path="/" element={<Navbar/>} />
        <Route path="/billingPage" element={<BillingPage />} />
        <Route path="/authorization" element={<Authorization/>} />
        <Route path="/billingPage/address" element={<AddressPage/>} />
      </Routes>
    </>
  );
};

export default MYRoutes;