import CategoryCard from "./Categorycard"
const data = [
    {
        id: 0,
        name: "Sheet&Towels",
        count: "10 products",
        img: "/damir-spanic-8lFeOQJUGgY-unsplash-300x300.jpg "
    },
    {
        id: 1,
        name: "Romper&OneSies",
        count: "14 products",
        img: "/51jVjORqL._SL1001_-300x300.jpg "
    },
    
     {
            id: 2,
            name: "Toy&Gifts",
            count: "10 products",
            img: "/child-1864718_1920-275x330.jpg"
     },   
        {
            id: 3,
            name: "Baby Gear",
            count: "17 products",
            img: "/onyx_black_1_-300x300.jpg"
        },
        {
            id: 4,
            name: "Baby Bibs",
            count: "12 products",
            img: "/pexels-helena-lopes-4409245-1-300x300.jpg"
        },

        {
            id: 5,
            name: "Feeding&Nursuring",
            count: "55 products",
            img: "/baby-2423896_1280-300x300.jpg"
        },

        {
            id: 6,
            name: "Full Sleeves",
            count: "8 products",
            img: "/edward-cisneros-r_Tnjj6TB30-unsplash-1-300x300.jpg "
        },
   
        {
            id: 7,
            name: "Thermal wear",
            count: "14 products",
            img: "/diaper.jpg "
        },
      ];


const Category = () => {
  return (
    <div className="container pt-16">
     <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.map((el) => (
            <CategoryCard key = {el.id}
            img = {el.img}
            name = {el.name}
            count = {el.count} />
        ))}
     </div>
     </div>
  );
};

export default Category
