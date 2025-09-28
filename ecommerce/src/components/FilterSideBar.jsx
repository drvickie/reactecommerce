const FilterSideBar = () => {
    const categories = ["People", "Premium", "Pets", "Food", "Landmarks", "Cities", "Nature"];
    const prices = ["Lower than $20", "$20 - $100", "$100 - $200", "More than $200"];

    return (
        <div className="bg-white shadow-sm p-4">
            <p className="font-extrabold text-xl mb-4">Filter</p>

            <div className="border-b pb-4 mb-4">
                <p className="font-extrabold text-lg mb-3">Categories</p>
                {categories.map((category, key) => (
                    <label key={key} className="flex items-center my-2">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm">{category}</span>
                    </label>
                ))}
            </div>

            <div className="mb-4">
                <p className="font-extrabold text-lg mb-3">Prices</p>
                {prices.map((price, key) => (
                    <label key={key} className="flex items-center my-2">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm">{price}</span>
                    </label>
                ))}
            </div>

            <div className="flex gap-2">
                <button className="flex-1 px-4 py-2 border border-black bg-white font-bold text-sm">
                    CLEAR
                </button>
                <button className="flex-1 px-4 py-2 border border-black bg-black font-bold text-sm text-white">
                    SAVE
                </button>
            </div>
        </div>
    );

}

export default FilterSideBar;