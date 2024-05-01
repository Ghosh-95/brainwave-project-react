import { brainwave } from "../assets";
import { navigation } from "../utils/constants/const";
import { useLocation } from "react-router-dom";
import Button from "./Button";

function NavLists({ data }) {
    const paths = useLocation();
    return (
        <li className={`block uppercase relative font-code text-2xl ${data.onlyMobile ? 'lg:hidden' : ''} px-6 py-6 md:py-8 xl:px-12 lg:-mr-0.25 lg:text-xs lg:font-semibold`} >
            <a className={`transition-colors text-n-1 hover:text-color-1 p-1 ${data.url === paths.hash ? 'z-2 lg:text-n-1' : 'lg:text-n-1/50'} lg:leading-5 lg:hover-text-n-1`} href={data.url}>{data.title}</a>
        </li>
    )
}

export default function Header() {
    return (
        <header className="fixed top-0 w-full z-50 bg-n-8/90 backdrop-blur-sm lg:backdrop-blur-sm border-b border-n-6 lg:bg-n-8/90">
            <article className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
                <h1 className="hidden">Header Wrapper</h1>
                <a href="#hero" className="block w-[12rem] xl:mr-8">
                    <img src={brainwave} width={190} height={40} alt="Brainwave logo image" />
                </a>

                <nav className="hidden fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent">
                    <ul className="relative z-2 flex flex-col items-center justify-between m-auto lg:flex-row">
                        {navigation.map(li => <NavLists key={li.id} data={li} />)}
                    </ul>
                </nav>

                <a href="#signup" className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block">New account</a>
                <Button className="hidden lg:flex" href="#login">Sign in</Button>
            </article>
        </header>
    )
}