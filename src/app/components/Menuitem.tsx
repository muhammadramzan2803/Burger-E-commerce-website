import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const ProductCardGrid = () => {
  const productImages = [
    "https://as2.ftcdn.net/v2/jpg/05/74/88/43/1000_F_574884344_jkGLDdV60Ty7OFlN08uhTAh8G60MkhtD.jpg",
    "https://i.pinimg.com/originals/ce/e4/52/cee452e7a99c5571c6ce793f80090c29.jpg",
    "https://img.freepik.com/photos-premium/burger-au-jus-salade_970542-32.jpg",
    "https://static.vecteezy.com/system/resources/previews/023/010/452/non_2x/the-fast-food-meal-in-the-black-background-with-ai-generated-free-photo.jpg",
    "https://img.freepik.com/premium-photo/delicious-fast-food-black-background-4k-hd-photos-creative-projects_1193781-1850.jpg",
    "https://img.pikbest.com/origin/09/14/42/57rpIkbEsT5YT.jpg!bw700",
  ];
  return (
    <div className="relative text-center p-10">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('https://img.freepik.com/free-photo/exploding-burger-with-vegetables-melted-cheese-black-background-generative-ai_157027-1734.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
          opacity: 0.1,
        }}
      />
      <h1 className="font-bold text-4xl mb-4 text-white z-10 relative">
        Most Requested Items
      </h1>
      <h1 className="text-3xl text-white z-10 relative">Order Now..!</h1>

      <section
        id="projects"
        className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-y-20 gap-x-14 mt-10 mb-5"
      >
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="w-70 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl z-10 relative"
          >
            <a href="#">
              <img
                src={productImages[index]}
                alt={`product ${index + 1}`}
                className="h-80 w-72 object-cover rounded-t-xl"
              />
              <div className="px-4 py-3 w-72">
                <span className="text-slate-500 mr-3 uppercase text-xs">
                  Categery
                </span>
                <p className="text-lg font-bold text-red-700 truncate black capitalize">
                  Burger Name {index + 1}
                </p>
                <div className="flex items-center">
                  <p className="text-lg font-semibold text-black my-3 cursor-auto">
                    $140
                  </p>


                  <div className="ml-auto">
                    <FaShoppingCart className="w-5 h-5 text-blue-800" />
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ProductCardGrid;
