import { companyLogos } from "../utils/constants/const";

export default function CompanyLogos({ className }) {
    return (
        <article className={`${className || ''}`}>
            <h5 className="text-center mb-6 tagline text-n-1/50">Helping people create beutiful content at</h5>

            <ul className="flex">
                {companyLogos.map((logo, i) => (
                    <li key={i} className="flex items-center justify-center flex-1 h-[8.5rem]">
                        <img width={134} height={28} src={logo} alt={`${logo} image`} />
                    </li>
                ))}
            </ul>

        </article>
    )
}