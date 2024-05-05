import { smallSphere, stars } from "../assets";
import Heading from "./Heading";
import Section from "./Section";
import PricingList from "./PricingList";
import { RightLine, LeftLine } from "../design/DesignPricing";

export default function Pricing() {
    return (
        <Section id="pricing" className="overflow-hidden">

            <article className="container relative z-2">
                <figure className="hidden relative justify-center mb-[6.5rem] lg:flex">
                    <img src={smallSphere} className="relative z-1" width={255} height={255} alt="sphere ring image" />

                    <figure className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                        <img src={stars} width={950} height={400} className="w-full" alt="star image" />
                    </figure>
                </figure>

                <Heading className="text-center" title="Pay once, use forever" tag="Get started with Brainwave" />
                <section className="relative">
                    <PricingList />
                    <LeftLine />
                    <RightLine />
                </section>

                <section className="flex justify-center mt-10">
                    <a href="#/pricing" className="text-xs fond-code font-semibold tracking-wider uppercase border-b">See the full details</a>
                </section>
            </article>

        </Section>
    )
}