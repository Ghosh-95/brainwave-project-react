import { check, service1, service2, service3 } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../utils/constants/const";
import Generating from "./Generating";
import Heading from "./Heading";
import Section from "./Section";
import { PhotoChatMessage, Gradient, VideoBar, VideoChatMessage } from "../design/DesignServices";
import { useState } from "react";

export default function Services() {
    const [index, setIndex] = useState(2);
    return (
        <Section id="how-to-use">
            <article className="container">
                <Heading title="Generative AI made for creators." text="Brainwave unlocks the potential of AI-powered Application" />

                <section className="relative">
                    <h1 className="hidden">Services</h1>

                    <div className="relative z-1 flex items-center border border-n-1/10 h-[39rem] lg:h-[46rem] rounded-3xl mb-5 p-8 lg:p-20 overflow-hidden">
                        <figure className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
                            <img className="h-full w-full object-cover md:object-right" width={800} height={730} src={service1} alt={service1 + ' image'} />
                        </figure>

                        <section className="relative z-1 max-w-[17rem] ml-auto">
                            <h4 className="h4 mb-4">Smartest AI</h4>
                            <p className="body-2 text-n-3 mb-[3rem]">Brainwave unlocks the potential of AI-powered Application</p>

                            <ul className="body-2 mt-5">
                                {brainwaveServices.map((service, i) => (
                                    <li key={i} className="flex items-start py-4 border-t border-n-6">
                                        <img src={check} width={24} height={24} alt="" />
                                        <p className="ml-4">{service}</p>
                                    </li>
                                ))}
                            </ul>
                        </section>
                        <Generating className={`absolute left-4 right-4 bottom-4 border border-n-1/10 lg:left-1/2 lg:right-auto lg:bottom-8 lg:-translate-x-1/2 lg:w-[30rem]`} />
                    </div>

                    <div className="relative z-1 grid gap-5 lg:grid-cols-2">
                        <section className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">

                            <figure className="absolute inset-0">
                                <img src={service2} className="w-full h-full object-cover" width={630} height={750} alt="robot image" />
                            </figure>
                            <section className="absolute inset-0 flex flex-col justify-end p-8 lg:p-15 bg-gradient-to-b from-n-8/0 to-n-8/90">
                                <h4 className="h4 mb-4">Photo Editing</h4>
                                <p className="body-2 text-n-3 mb-[3rem]">Automatically enhance your phot using our AI app's photo editing feature. Try it now!</p>
                            </section>
                            <PhotoChatMessage />

                        </section>

                        <section className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
                            <article className="py-12 px-4 xl:px-8">
                                <h4 className="h4 mb-4">Video Generation</h4>
                                <p className="body-2 mb-[2rem] text-n-3">The world's most powerful AI photo and video art generation engine. What will you create?</p>

                                <ul className="flex items-center justify-between">
                                    {brainwaveServicesIcons.map((icon, i) => {
                                        return (
                                            <li onClick={() => setIndex(i)}
                                                className={`flex items-center justify-center rounded-2xl ${i === index ? 'w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]' : 'w-10 h-10 bg-n-6 md:w-15 md:h-15'}`}
                                                key={i}>
                                                <figure className={`${i === index ? 'flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]' : ''}`}>
                                                    <img src={icon} width={24} height={24} alt={icon + ' image'} />
                                                </figure>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </article>
                            <article className="relative h-[20rem] overflow-hidden rounded-2xl bg-n-8 md:h-[25rem]">
                                <figure>
                                    <img src={service3} className="w-full h-full object-cover " width={520} height={400} alt="enhanced robot image" />
                                </figure>

                                <VideoChatMessage />
                                <VideoBar />
                            </article>
                        </section>
                    </div>
                    <Gradient />
                </section>
            </article>
        </Section>
    )
}