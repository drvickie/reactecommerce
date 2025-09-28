import Suggestion from "./Suggestion";
const About = () => {   
    return (
        <div className=" my-2 md:flex justify-between border-b border-b-gray-500">
            <div className="md:w-[60%]">
                <p className="text-black my-2 font-bold text-xl">About the Samurai King Resting</p>
            <p className="text-[#656565] my-3">So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder text to mockup various fonts for a type specimen book.</p>
            </div>
            <Suggestion />
        </div>
    );
}
 
export default About;