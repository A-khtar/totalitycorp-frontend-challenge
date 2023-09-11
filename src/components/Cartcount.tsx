
interface PropsType {
  size: string;
  cart: number;
}

const Cartcount: React.FC<PropsType> = ({ size, cart}) => {
  return (
    <div className={`absolute bg-red-600 text-white text-[14px] ${size} -right-2.5 -top-1 rounded-full grid place-items-center h-[25px] w-[25px]`}>
      {cart}
    </div>
  );
};

export default Cartcount;