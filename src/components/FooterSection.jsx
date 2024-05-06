import { socials } from "../utils/constants/const";
import Section from "./Section";

export default function FooterSection() {
    return (
        <Section crosses className="!px-0 !py-10">
            <article className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
                <p className="caption text-n-4 lg:block">&copy; {new Date().getFullYear()}. All rights reserved</p>

                <ul className="flex flex-wrap gap-5">
                    {socials.map(icon => (

                        <a key={icon.id} className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-all hover:bg-n-6 hover:-translate-y-1" href={icon.url} target="_blank">
                            <img src={icon.iconUrl} width={16} height={16} alt="" />
                        </a>

                    ))}
                </ul>
            </article>
        </Section>
    )
}