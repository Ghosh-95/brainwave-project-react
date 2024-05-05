import { check2, grid, loading1 } from "../assets";
import { Gradient } from "../design/DesignRoadmap";
import { roadmap } from "../utils/constants/const";
import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";
import TagLine from "./TagLine";

function RoadmapContainer() {
    return (
        <>
            {roadmap.map(map => {
                const status = map.status === "done" ? "Done" : "In progress";

                return (
                    <section key={map.id} className={` md:even:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${map.colorful ? 'bg-conic-gradient' : 'bg-n-6'}`}>

                        <div className="relative p-6 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">

                            <figure className="absolute left-0 top-0 max-w-full">
                                <img src={grid} className="w-full" width={550} height={550} alt={map.id + 'grid image'} />
                            </figure>

                            <section className="relative z-1">
                                <article className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">

                                    <TagLine>{map.date}</TagLine>

                                    <figure className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
                                        <img src={map.status === 'done' ? check2 : loading1} alt="status image" className="mr-2.5" height={16} width={16} />

                                        <figcaption className="tagline">{status}</figcaption>

                                    </figure>

                                </article>

                                <figure className="mb-10 -my-10 -mx-15">
                                    <img src={map.imageUrl} className="w-full" width={628} height={426} alt={map.title} />
                                </figure>

                                <h4 className="h4 mb-4">{map.title}</h4>
                                <p className="body-2 text-n-4">{map.text}</p>
                            </section>
                        </div>

                    </section>
                )
            })}

            <Gradient />
        </>
    )
}

export default function Roadmap() {
    return (
        <Section className="overflow-hidden" id="roadmap">
            <article className="container md:pb-10">
                <Heading title="What we're working on" tag="Get ready to get started" />

                <section className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
                    <RoadmapContainer />
                </section>
                <section className={`flex items-center justify-center my-15`}>
                    <Button href="#roadmap">Our roadmap</Button>
                </section>
            </article>
        </Section>
    )
}