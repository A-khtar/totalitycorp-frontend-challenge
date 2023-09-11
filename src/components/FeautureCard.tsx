interface propsType{
    title: string;
    icon : React.ReactNode;
}
const FeautureCard: React.FC<propsType> = ({title, icon}) => {
    return <div className="flex items-center gap-4">
        <div className=" text-accentDark text-[24px] grid place-item-center rounded-full ml-7">
            {icon}
        </div>
        <div>
            <h3 className= "text-accent font-medium text-xl"> {title}</h3>
            <p className="text-gray-500 text-[14px]"> Lorem ,ipsum dolor</p>
        </div>
    </div>

  
  
};

export default FeautureCard