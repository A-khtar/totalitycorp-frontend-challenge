import ProductCard from "./ProductCard"
const data = [
    {id: 0 ,img: "/photos1.jpg", name: " " ,price: 43.99},
    {id: 1 ,img: "/photos4.jpg", name: " " ,price: 34.99},
    {id: 2 ,img: "/photos4.jpg", name: " " ,price: 27.99},
    {id: 3 ,img: "/photos4.jpg", name: " " ,price: 44.99}
];


const Featurediaper = () => {
  return (
    <div className="container pt-16">
        <div className="lg:flex justify-between items-center">
    <div>
       <h3 className="font-medium text-2xl">Baby boy Dress </h3>
       <p className="text-gray-500 mt-2 ">Buy Premium Clothes at Best Price</p>
       </div>
       <div className="space-x-4 mt-8 lg:mt-8">
        <button className="feature_btn">Printed</button> 
        <button className="text-gray-600 hover:text-accent">Pants</button>
        <button className="text-gray-600 hover:text-accent">Shirts</button>
       </div>
       </div>
    <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-2">
        <div>
            <img className="w-full h-full object-cover" src = "/child-1864718_1920-275x330.jpg" alt = "banner" />
        </div>
        {data.map((el) => <ProductCard id = {el.id} 
        img = {el.img} 
        name = {el.name}
        price = {el.price}/> 
        ) }
    </div>
       
       </div>
  )
}

export default Featurediaper