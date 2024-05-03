import { curve, hero, heroBackground, robot } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "../design/DesignHero";
import { heroIcons } from "../utils/constants/const";
import { ScrollParallax } from "react-just-parallax";
import Generating from "./Generating";
import Notification from "./Notification";
import { useRef } from "react";
import CompanyLogos from "./CompanyLogo";

export default function Hero() {
    const parallaxRef = useRef(null);

    return (
        <Section
            className="pt-[12rem] -mt-[5.25rem]"
            crosses
            crossOffset="lg:translate-y-[5.25rem]"
            customPaddings
            id="hero"
        >
            <div className="container relative" ref={parallaxRef}>
                <article className="text-center relative z-1 max-w-[62rem] mx-auto mb-[4rem] md:mb-20 lg:mb-[6rem]">
                    <h1 className="h1 mb-8">
                        Explore the possibilities of&nbsp;AI&nbsp;Chatting with {" "}
                        <span className="inline-block relative">
                            Brainwave
                            <img src={curve} alt="an underline curvy image" className="absolute top-full w-full left-0 xl:-mt-2" />
                        </span>
                    </h1>
                    <p className="body-1 mx-auto max-w-3xl text-n-2 mb-6 lg:mb-8">Unleash the power of AI within Brainwave. Upgrade your productivity with Brainwave, the open AI chat app.</p>
                    <Button href="/#pricing" white>Get Started</Button>
                </article>
                <article className="relative max-w-[23rem] lg:max-w-5xl mx-auto xl:mb-24">
                    <div className="relative z-1 rounded-2xl p-0.5 bg-conic-gradient">
                        <div className="relative bg-n-8 rounded-[1rem]">
                            {/* <span className="block bg-n-10 rounded-t-[0.9rem] h-[1.4rem]" /> */}
                            <figure className="aspect-[33/40] rounded-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                                <img
                                    src={robot}
                                    className="w-full scale-[1.7] translate-y-[8%] md:scale-100 md:-translate-y-[10%]  lg:-translate-y-[20%]"
                                    alt="futuristic robot high resolution image" width={1024} height={490} />


                                <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" />

                                <ScrollParallax isAbsolutelyPositioned>
                                    <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] p-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">

                                        {heroIcons.map((icon, i) => (
                                            <li key={i} className="p-5">
                                                <img src={icon} height={25} width={24} alt={icon} />
                                            </li>
                                        ))}

                                    </ul>
                                </ScrollParallax>

                                <ScrollParallax isAbsolutelyPositioned>
                                    <Notification className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                                        title="Code generation" />
                                </ScrollParallax>
                            </figure>
                        </div>
                        <Gradient />
                    </div>
                    <figure className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
                        <img src={heroBackground} alt="hero image" width={1440} height={1800} />
                    </figure>
                    <BackgroundCircles />
                </article>
                <CompanyLogos className="hidden relative lg:block z-10 mt-[20]" />
            </div>
            <BottomLine />
        </Section>
    )
}