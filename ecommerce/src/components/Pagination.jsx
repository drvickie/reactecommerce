const Pagination = () => {
    const pages = [1, 2, 3, 4];
    return (
        <div className="flex border-zinc-950 my-5 justify-center">
            <img src="./icons/Vector 1.png" alt="previous" />
            {pages.map((page, key) => (
                <span key={key} className="px-2">
                    {page}
                </span>
            ))}
            <img src="./icons/Vector 2.png" alt="next" />
        </div>
    );
};

export default Pagination;