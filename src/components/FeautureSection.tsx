import { LiaShippingFastSolid, LiaMoneyBillWaveSolid , LiaGiftSolid } from "react-icons/lia";
import {FiPhoneCall} from "react-icons/fi";
import FeautureCard from "./FeautureCard";
const data = [
    {
        title: "free Shipping",
        icon: <LiaShippingFastSolid/>,
    },
    {
        title: "Best Price Gaurantee",
        icon: <LiaMoneyBillWaveSolid/>
    },
    {
    title: "free Curbside Pickup,",
    icon: <LiaGiftSolid/>,
    },
    {
        title: "SUPPORT 24X7",
        icon: <FiPhoneCall/>,
    },
];

const FeautureSection = () => {
  return (
    <div className="Container pt-16">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {data.map((el) => (
                <FeautureCard key = {el.title} title = {el.title}  icon = {el.icon}/>
            ))}
        </div>
    </div>
  );
};

export default FeautureSection


