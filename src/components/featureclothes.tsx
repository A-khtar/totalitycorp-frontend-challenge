// Featureclothes.tsx

import ProductCard from "./ProductCard";

const data = [
  { id: 0, img: "/photo10.jpg", name: "Newborn Cotton Frock", price: 14.99 },
  { id: 1, img: "/photo11.jpg", name: "Newborn Cotton Frock", price: 17.99 },
  { id: 2, img: "/photo1.jpg", name: "Newborn Cotton Frock", price: 18.99 },
  { id: 3, img: "/photo15.jpg", name: "Newborn Cotton Frock", price: 19.99 },
];

const Featureclothes = () => {
  return (
    <div className="container pt-16">
      <div className="lg:flex justify-between items-center">
        <div>
          <h3 className="font-medium text-2xl">Baby Girl Dress</h3>
          <p className="text-gray-500 mt-2">Buy Premium Clothes at Best Price</p>
        </div>
        <div className="space-x-4 mt-8 lg:mt-8">
          <button className="feature_btn">Full Sleeves</button>
          <button className="text-gray-600 hover:text-accent">Pants</button>
          <button className="text-gray-600 hover:text-accent">Diapers</button>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-2">
        <div>
          <img className="w-full h-full object-cover" src="/c7.jpg" alt="banner" />
        </div>
        {data.map((el) => (
          <ProductCard
            // key={el.id}
            id={el.id} // Pass the id as a prop
            img={el.img}
            name={el.name}
            price={el.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Featureclothes;
