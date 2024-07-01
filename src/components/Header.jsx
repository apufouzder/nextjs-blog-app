
const Header = () => {
    return (
        <div className="text-center h-[600px] lg:w-[900px] items-center mx-auto flex flex-col justify-center">
            <h1 className="text-5xl text-darkBlack mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit?</h1>
            <p className="text-lg text-secondary leading-7 mb-6">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi maiores illum rem iste eveniet? Repudiandae magnam hic itaque officia, est in illum aliquam aspernatur voluptatum.</p>

            <div className="flex">
                <input className="border border-darkBlack text-lg p-3 focus:outline-none w-full" placeholder="Subscribe..." type="text" />
                <button className="bg-primary hover:bg-darkBlack duration-150 py-3 px-6 text-lg font-medium text-white">Submit</button>
            </div>
        </div>
    );
};

export default Header;