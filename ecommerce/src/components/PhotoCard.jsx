const PhotoCard = ({ card }) => {
    return (
        <div className=" flex flex-col shadow-md">

            <div
                className="h-64 bg-cover bg-center"
                style={{ backgroundImage: `url("${card.bgImage}")` }}
            ></div>

            <div className="p-4 flex flex-col flex-1">
                <span className="text-gray-500 text-sm">{card.category}</span>
                <h3 className="font-bold text-lg mt-1">{card.title}</h3>
                <p className="text-gray-700 mt-2">{card.price}</p>

                <button className="mt-auto bg-black text-white py-2 px-4 rounded hover:bg-gray-800">
                    ADD TO CART
                </button>
            </div>
        </div>
    );
};

export default PhotoCard;