import {BsArrowRight} from "react-icons/bs"
const Hero = () => {
  return (
    <div className="container pt-8">
        <div className="grid xl:grid-cols-3 xl:grid-rows-2 gap-8">
            <div className="relative xl:col-span-2 xl:row-start-1 xl:row-end-[-1]">
               <img className="w-full h-full object-cover rounded-lg" src="/photo.jpg" alt="Baby wear"/>
               <div className="absolute max-w-[470px] sm:ml-12 ml-6 top-[10%] translate-y-[50%] sm:space-y-4">
                <p className="text-xl hidden sm:block">100% Organic Baby apparel</p>
                <h2 className=" text-2xl sm:text-4xl md:text-6xl font-bold ">  Best Bulk  Baby  Clothing </h2>
                <p className="text-gray-500 text-xl pt-4 sm:pt-8 font bold ">Starting At</p>
                <div className="font-medium text-red-600 text-2xl sm-text-4xl sm:pb-8 pb-4"> $11.99</div>
                <div className = "bg-accentDark hover:bg-accent text-white rounded-full w-fit flex items-center gap-4 px-4 py-2 text-[14px] sm:px-6 sm:py-3 cursor-pointer">
                    Shop Now<BsArrowRight/>
                </div>
               </div>
            </div>
            <div className="relative">
                <img className = "w-[400px] h-[400px] object-cover rounded-lg" src = "/cover2.jpg" alt = "baby clothes"/>
                <div className="absolute max-w-[470px] sm:ml-12 ml-6 top-[1%] translate-y-[50%] sm:space-y-4">
                <p className="text-xl hidden sm:block font-bold">Best Baby <br/> Premium  Jumpsuit</p>
                
                <p className="text-gray-500 text-xl pt-4 sm:pt-8 font-bold ">Starting At</p>
                <div className="font-medium text-red-600 text-2xl sm-text-4xl sm:pb-8 pb-4"> $15.99</div>
                <div className = "bg-accentDark hover:bg-accent text-white rounded-full w-fit flex items-center gap-4 px-4 py-2 text-[14px] sm:px-6 sm:py-3 cursor-pointer">
                    Shop Now<BsArrowRight/>
                </div>
               </div>
               </div>
               <div className="relative">
                <img className = "w-[400px] h-[400px] object-cover rounded-lg" src = "/baby bibs.jpg" alt = "baby clothes"/>
                <div className="absolute max-w-[470px] sm:ml-12 ml-6 top-[3%] translate-y-[50%] sm:space-y-4">
                <p className="text-xl hidden sm:block font-bold">Best Baby Bibs</p>
                
                <p className="text-gray-900 text-xl pt-4 sm:pt-8 font-bold">Starting At</p>
                <div className="font-medium text-red-600 text-2xl sm-text-4xl sm:pb-8 pb-4"> $11.99</div>
                <div className = "bg-accentDark hover:bg-accent text-white rounded-full w-fit flex items-center gap-4 px-4 py-2 text-[14px] sm:px-6 sm:py-3 cursor-pointer">
                    Shop Now<BsArrowRight/>
            </div>
            </div>
            </div>
            </div>
        </div> 
        
    
  )
}

export default Hero