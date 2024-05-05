import brackets from "../assets/svg/Brackets";

export default function TagLine({ className, children }) {
    return (
        <section className={`${className || ''} tagline flex items-center`}>
            {brackets('left')}
            <div className="mx-3 text-n-3">{children}</div>
            {brackets('right')}
        </section>
    )
}