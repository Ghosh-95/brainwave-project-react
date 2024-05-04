import { brainwaveSymbol, check } from "../assets";
import { collabApps, collabContent, collabText } from "../utils/constants/const";
import Button from "./Button";
import Section from "./Section";
import { LeftCurve, RightCurve } from "../design/DesignCollaboration";

export default function Collaboration() {
    return (
        <Section crosses>
            <article className="container lg:flex">

                <section className="max-w-[25rem]">
                    <h2 className="h2 mb-4 md:mb-8">AI chat app for seamless collaboration</h2>

                    <ul className="max-w-[22rem] mb-10 md:mb-14">
                        {collabContent.map(content => (
                            <li className="mb-3 py-3" key={content.id}>
                                <figure className="flex items-center">
                                    <img src={check} alt={content.title} width={24} height={24} />
                                    <figcaption className="ml-5 body-2">{content.title}</figcaption>
                                </figure>
                                {content.text && (<p className="body-2 ml-11 mt-2 text-n-4">{content.text}</p>)}
                            </li>
                        ))}
                    </ul>

                    <Button>Try it now</Button>
                </section>

                <section className="lg:ml-auto xl:w-[38rem]">
                    <p className="body-2 mb-4 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto mt-5">{collabText}</p>

                    <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale-75 md:scale-100">
                        <div className="flex w-60 border border-n-6 rounded-full aspect-square m-auto">
                            <div className="rounded-full bg-conic-gradient aspect-square w-[6rem] m-auto p-[0.2rem]">
                                <figure className="h-full w-full flex items-center justify-center rounded-full bg-n-8">
                                    <img src={brainwaveSymbol} width={48} height={48} alt="braniwave symbol" />
                                </figure>
                            </div>
                        </div>
                        <ul>
                            {collabApps.map((app, i) => (
                                <li key={app.id} className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${i * 45} `}>
                                    <figure className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${i * 45}`}>
                                        <img
                                            className="m-auto"
                                            width={app.width}
                                            height={app.height}
                                            src={app.icon}
                                            alt={app.icon + ' image'} />
                                    </figure>
                                </li>
                            ))}
                        </ul>
                        <LeftCurve />
                        <RightCurve />
                    </div>
                </section>

            </article>
        </Section>
    )
}