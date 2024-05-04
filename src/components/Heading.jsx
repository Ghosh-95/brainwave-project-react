export default function Heading({ className, title }) {
    return (
        <>
            <h2 className={`${className} h2 max-w-[50rem] mx-auto mb-12 lg:mb-20`}>{title || ''}</h2>
        </>
    );
};