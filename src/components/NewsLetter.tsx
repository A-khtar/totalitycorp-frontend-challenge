import {LuMailOpen} from "react-icons/lu";

const NewsLetter = () => {
  return (
    <div className="bg-accentDark mt-16">
        <div className="container py-8 flex flex-col md:flex-row justify-between items-center gap4 text-white">
            <div className="flex flex-shrink-0 items-center gap-4">
                <LuMailOpen className = "text-[60px]"/>
                <div>
            <h3 className="text-xl sm:-2xl font-semibold">
                Sign up To Our Newsletters
            </h3>
            <p>...and recieve $10 coupon for first shopping</p> 
                </div> 
        </div>
        <div className="w-full max-w-[500px] relative">
            <input className="py-5 px-6w-full rounded-full"
            type = "text"
            placeholder="  Your Email Address...."/>
            <button className="bg-accentDark absolute top-[50%] right-2 translate-y-[50]p py-2 px-4 rounded-full hover:bg-acccent">
                Subscribe!
            </button>
            </div>
        </div>
    </div>
  );
};

export default NewsLetter;