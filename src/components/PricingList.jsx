import { check } from "../assets";
import { pricing } from "../utils/constants/const.js";
import Button from "./Button.jsx";

export default function PricingList() {
    return (
        <section className="flex gap-[1rem] items-center max-lg:flex-wrap">
            {pricing.map(plan => (
                <article key={plan.id} className="w-[19rem] max-lg:w-full lg:w-auto h-full px-6 border border-n-6 rounded-[2rem] even:py-14 odd:py-8">
                    <h4 className={`h4 font-bold mb-4 ${plan.id === "1" ? 'text-purple-600' : plan.id === "2" ? 'text-pink-700' : 'text-yellow-500'}`}>{plan.title}</h4>

                    <p className="body-2 text-n-1/50 min-h-[4rem] mb-3">{plan.description}</p>

                    <section className="flex items-center mb-6 h-[5.5rem]">
                        {plan.price && (
                            <>
                                <h3 className="h3">₹</h3>
                                <p className="font-bold leading-none text-[5.5rem]">{plan.price}</p>
                            </>
                        )}
                    </section>

                    <Button className="w-full mb-6" href={`${plan.price ? '#pricing' : '@mailto:sushovanghosh960@gmail.com'}`} white={!!plan.price}>
                        {plan.price ? "Get started" : 'Contact us'}
                    </Button>

                    <ul>
                        {plan.features.map((feat, i) => (
                            <li key={i} className="flex items-start py-5 border-t border-n-6">
                                <img src={check} alt="tick image" />
                                <p className="body-2 ml-4">{feat}</p>
                            </li>
                        ))}
                    </ul>
                </article>
            ))}
        </section>
    )
}