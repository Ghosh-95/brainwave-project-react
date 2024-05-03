import { loading } from "../assets";

export default function Generating({ className }) {
    return (
        <>
            <figure className={`${className} flex items-center bg-n-8/80 px-6 h-[2.6rem] md:h-[3.5rem] rounded-[1.7rem] text-base`}>
                <img src={loading} alt="loading image" className="animate-aiSpin w-5 h-5 mr-4" />
                <p>AI is generating</p>
            </figure>
        </>
    )
}