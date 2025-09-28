const Filter = ({ onClose }) => {
    const categories = ["People", "Premium", "Pets", "Food", "Landmarks", "Cities", "Nature"];
    const prices = ["Lower than $20", "$20 - $100", "$100 - $200", "More than $200"];

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray/70 backdrop-blur bg-opacity-50 z-50">
            
            <div className="bg-white w-11/12 max-w-lg rounded-lg shadow-lg px-5">

                <div className="flex py-3 px-4 justify-between items-center border-b">
                    <p className="font-extrabold text-2xl">Filter</p>
                    <img
                        src="./icons/Group 33.png"
                        alt="close"
                        className="cursor-pointer"
                        onClick={onClose}
                    />
                </div>

                <div className="border-b px-4 py-3">
                    <p className="font-extrabold text-xl mb-2">Categories</p>
                    {categories.map((category, key) => (
                        <label key={key} className="flex items-center my-2">
                            <input type="checkbox" className="mr-2" />
                            {category}
                        </label>
                    ))}
                </div>

                <div className="px-4 py-3">
                    <p className="font-extrabold text-xl mb-2">Prices</p>
                    {prices.map((price, key) => (
                        <label key={key} className="flex items-center my-2">
                            <input type="checkbox" className="mr-2" />
                            {price}
                        </label>
                    ))}
                </div>

                <div className="flex justify-between px-4 py-4">
                    <button className="px-8 py-2 border-2 border-black bg-white font-extrabold text-lg">
                        CLEAR
                    </button>
                    <button
                        className="px-8 py-2 border-2 border-black bg-black font-extrabold text-lg text-white"
                        onClick={onClose}
                    >
                        SAVE
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Filter;