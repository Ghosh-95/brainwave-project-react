import SectionSvg from "../assets/svg/SectionSvg";

function SideLine({ direction }) {
    return <div className={`hidden absolute top-0 w-0.25 h-full bg-stroke-1 pointer-events-none md:block ${direction}-5 lg:${direction}-7.5 xl:${direction}-10`} />
}

export default function Section({ id, className, customPaddings, children, crosses, crossOffset }) {
    return (
        <section id={id} className={`relative ${customPaddings || `py-10 lg:py-16 xl:py-20 ${crosses && 'lg:py-32 xl:py-40'}`} ${className || ''}`}>
            {children}
            <SideLine direction={'left'} />
            <SideLine direction={'right'} />

            {crosses && (
                <>
                    <div className={`hidden absolute top-0 left-7.5 right-7.5 h-0.25 bg-stroke-1 ${crossOffset && crossOffset} pointer-events-none lg:block xl:inset-x-10`} />

                    <SectionSvg crossesOffset={crossOffset} />
                </>
            )}
        </section>
    )
}