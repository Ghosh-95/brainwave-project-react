export default function Heading({ className, title, text }) {
    return (
        <article className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-20`}>
            <h2 className="h2">{title || ''}</h2>
            {text && (<p className="text-n-4 mt-4 body-2">{text}</p>)}
        </article>
    );
};