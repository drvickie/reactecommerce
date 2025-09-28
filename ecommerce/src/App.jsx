import React, { useState } from "react";
import Header from "./components/Header";
import AddToCart from "./components/AddToCart";
import About from "./components/About";
import PhotoCard from "./components/PhotoCard";
import Pagination from "./components/Pagination";
import Filter from "./components/Filter";
import FilterSideBar from "./components/FilterSideBar";

const App = () => {
  const [showFilter, setShowFilter] = useState(false)

  const photoCards = [
    {
      bgImage: "/images/Rectangle 2.png",
      category: "People",
      title: "Red Bench",
      price: "$3.89",
    },
    {
      bgImage: "/images/Rectangle 2.1.png",
      category: "Food",
      title: "Egg Baloon",
      price: "$93.89",
    },
    {
      bgImage: "/images/Rectangle 2.4.png",
      category: "People",
      title: "Man",
      price: "$100.00",
    },
    {
      bgImage: "/images/Rectangle 2.5.png",
      category: "Landmarks",
      title: "Architecture",
      price: "$101.00",
    }
  ];

  return (
    <div className="flex h-screen flex-col lg:mx-10">
      <Header />
      <div className="m-2">
        <p className="text-black font-extrabold text-2xl self-start">
          Samurai King Resting
        </p>
        <div className="bg-[url(/images/dog1.png)] lg:bg-[url(/images/dog2.png)] mt-2 w-full h-64 lg:h-[500px] bg-cover bg-center flex items-end justify-start my-2">
          <div className="bg-white text-center px-1 py-3 my-0.5">
            <p>Post of the day</p>
          </div>
        </div>
        <AddToCart />

        <About />
        <div className="my-5 flex justify-between">
            <p className="text-lg">
                <span className="font-bold">Photography/</span>
                <span className="text-[#656565]">Premium Photos</span>
            </p>
            <div className="lg:flex justify-between w-[15%] items-center hidden">
                <div className=" flex justify-between"><img src="./icons/Group.svg" alt="sort" />
                    <p className="text-sm text-[#656565]">
                        Sort By</p>
                    <select name="" id="">
                        <option value="">Price</option>
                        <option value="">Pets</option>
                        <option value="">People</option>
                    </select>
                </div>
            </div>
            <img src="./icons/filter.svg" alt="filter" className="lg:hidden" 
            onClick={() => setShowFilter(!showFilter)}
            />
        </div>

        <div className="lg:flex lg:gap-6">
          
          <div className="lg:w-1/4 lg:flex-shrink-0">

            {showFilter && (
              <div className="lg:hidden">
                <Filter onClose={() => setShowFilter(false)} />
              </div>
            )}
            
            <div className="hidden lg:block">
              <FilterSideBar />
            </div>
          </div>

          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {photoCards.map((card, key) => (
                <PhotoCard key={key} card={card} />
              ))}
            </div>
          </div>
        </div>

        <Pagination />
      </div>
    </div>
  );
}
export default App;