const Suggestion = () => {
    const images =[
        "./images/Rectangle 10.png",
        "./images/Rectangle 10.1.png",
        "./images/Rectangle 10.2.png"
    ]
    const sizes = [
        "1020 x 1020 pixel",
        "15 mb"
    ]
    return (
        <div className="my-5 lg:w-[30%]">
            <p className="text-black font-bold text-lg lg:text-end">People also buy</p>
            <div className="flex justify-around">
                {images.map((img, key) => (
                    <img
                    src={img}
                    key={key}
                    alt="suggestions"
                    className="my-2"
                    />
                ))}
            </div>
            <p className="text-black font-bold text-xl lg:text-end">Details</p>
            <div className="my-3 lg:text-end">
                {sizes.map((size, key) =>(
                    <p key={key} className="text-[#656565]">Size: {size}</p>
                ))}
            </div>
        </div>
    );
}
 
export default Suggestion;