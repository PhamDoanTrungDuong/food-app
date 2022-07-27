import React, { useState } from "react";
import { data } from "./../data/data";

export interface IItem {
      id: number;
      name: string;
      category: string;
      image: string;
      price: string;
}

const Food: React.FC = () => {
  const [foods, setFoods] = useState<IItem[]>(data);

//   Filter Categories
  const filterType = (category: any) => {
      setFoods(
            data.filter((item) => {
                  return item.category === category
            })
      )
  }
//   Filter Price
const filterPrice = (price: any) => {
      setFoods(
            data.filter((item) => {
                  return item.price === price
            })
      )
  }

  return (
    <div className="max-w-[1640px] mx-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">Top Rated Menu Items</h1>

      {/* Filter Row */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* Filter Type */}
        <div>
          <p className="font-bold text-xl text-gray-700">Filter Type</p>
          <div className="flex flex-wrap">
            <button onClick={() => setFoods(data)} className="border-orange-600 text-orange-600 hover:bg-orange-500 hover:text-white transition-all m-1">All</button>
            <button onClick={() => filterType('burger')} className="border-orange-600 text-orange-600 hover:bg-orange-500 hover:text-white transition-all m-1">Burger</button>
            <button onClick={() => filterType('pizza')} className="border-orange-600 text-orange-600 hover:bg-orange-500 hover:text-white transition-all m-1">Pizza</button>
            <button onClick={() => filterType('salad')} className="border-orange-600 text-orange-600 hover:bg-orange-500 hover:text-white transition-all m-1">Salads</button>
            <button onClick={() => filterType('chicken')} className="border-orange-600 text-orange-600 hover:bg-orange-500 hover:text-white transition-all m-1">Chicken</button>
          </div>
        </div>

        {/* Filter Price */}
        <div>
          <p className="font-bold text-xl text-gray-700">Filter Price</p>
          <div>
            <button onClick={() => filterPrice('$')} className="border-orange-600 text-orange-600 hover:bg-orange-500 hover:text-white transition-all m-1">$</button>
            <button onClick={() => filterPrice('$$')} className="border-orange-600 text-orange-600 hover:bg-orange-500 hover:text-white transition-all m-1">$$</button>
            <button onClick={() => filterPrice('$$$')} className="border-orange-600 text-orange-600 hover:bg-orange-500 hover:text-white transition-all m-1">$$$</button>
            <button onClick={() => filterPrice('$$$$')} className="border-orange-600 text-orange-600 hover:bg-orange-500 hover:text-white transition-all m-1">$$$$</button>
          </div>
        </div>
      </div>
      {/* Display Foods */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-10">
            {foods.map((item, idx) => {
                  return (
                        <div key={idx} className='border shadow-lg hover:scale-105 duration-300 cursor-pointer rounded-lg'>
                              <img src={item.image} alt={item.name} className='w-full h-[200px] object-cover rounded-t-lg'/>
                              <div className="flex justify-between px-2 py-4">
                                    <p className="font-bold">{item.name}</p>
                                    <p><span className="bg-orange-500 text-white py-1 px-2 rounded-md">{item.price}</span></p>
                              </div>
                        </div>
                  )
            })}
      </div>
    </div>
  );
};

export default Food;
