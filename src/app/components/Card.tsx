import React from "react";

const FloatingImageContentBlock = () => {
  return (
    <section className="container mx-auto py-10 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 md:pr-10">
        <h2 className="text-3xl font-bold mb-4 text-white">Delicious Burger</h2>
        <p className="text-white mb-4">
          Our burgers are made with the finest ingredients and prepared to
          perfection.
          <br />
          Enjoy your meal with our burger.
        </p>
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-200">
          Order Now
        </button>

        <h3 className="text-2xl font-semibold mt-6 mb-2 text-center text-white">
          {" "}
          Coming Soon Our New Burger Launches{" "}
        </h3>

        <ul>

          <li> <strong>Chessy BBQ Bacon Burger: </strong>
 A mouthwatering blend of cheddar cheese,
crispy bacon, and BBQ.
          </li>
          <br />

          <li> <strong>Spicy Jalapeno Burger: </strong>
A fiery delight topped with fresh jalapenos and zesty chipotle mayo.
          </li>
          <br />

          <li> <strong>Mashroom swiss Burger: </strong>
Juicy beef patty melted Swiss cheese for a rich, savory taste.
          </li>
          <br />

          <li> <strong>Avocado Veggie Burger: </strong>
 A delicious fusion of avocado, bell peppers, and onions.
          </li>
          <br />

          <li> <strong>BBQ Chicken Burger: </strong>
          A flavorful blend of fresh chicken breast,
          crispy bacon, and BBQ sauce.
          </li>
          <br />

          <li> <strong>Fried Chicken Burger: </strong>
          A tender, juicy chicken patty served with a delicious fried onion.
          </li>

        </ul>
        </div>

        <div className="md:w-1/2 mt-6 md:mt-0">
        <img src="https://i.pinimg.com/736x/f8/da/61/f8da6106d87e47b887878f4a2c1a8d1a.jpg"
         alt="delicious burger"
         className="w-full h-auto rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105 mr-7 mt-24" />

        
      </div>
    </section>
  );
};

export default FloatingImageContentBlock;
