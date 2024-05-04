import Section from "./Section";
import Heading from "./Heading";
import { benefits } from "../utils/constants/const";

import ButtonGradient from "../assets/svg/ButtonGradient";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "../design/DesignBenefits";
import ClipPath from "../assets/svg/ClipPath";

export default function Benefits() {
    return (
        <Section id="features">
            <h3 className="hidden">Features Section</h3>
            <article className="container relative z-2">
                <Heading
                    className="md:max-w-md lg:max-w-2xl"
                    title="Chat Smarter, Not Harder with Brainwave"
                />

                <ul className="flex flex-wrap gap-10 mb-10">
                    {benefits.map(item => (
                        <li
                            className={`block mx-auto relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[23rem]`}
                            style={{
                                backgroundImage: `url(${item.backgroundUrl})`
                            }}
                            key={item.id}>
                            <section className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                                <h5 className="h2 mb-5">{item.title}</h5>
                                <p className="body-2 mb-6 text-n-3">{item.text}</p>

                                <figure className="flex items-center mt-auto">
                                    <img width={48} height={48} src={item.iconUrl} alt={item.title + ' image'} />
                                    <figcaption className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">Explore more</figcaption>
                                    <Arrow />
                                </figure>
                            </section>
                            {item.light && <GradientLight />}
                            <section className="absolute inset-0.5 bg-n-8" style={{ clipPath: "url(#benefits)" }}>
                                <figure className="absolute inset-0 opacity-0 transition-all hover:opacity-10">
                                    {item.imageUrl && (
                                        <img
                                            src={item.imageUrl}
                                            width={380}
                                            height={362}
                                            alt={item.title}
                                            className="h-full w-full object-cover"
                                        />
                                    )}
                                </figure>
                            </section>
                            <ClipPath />
                        </li>
                    ))}
                </ul>
            </article>
            <ButtonGradient />
        </Section>
    )
}