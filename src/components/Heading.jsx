import TagLine from "./TagLine";

export default function Heading({ className, title, text, tag }) {
    return (
        <article className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-20`}>
            {tag && (
                <TagLine className='mb-4 md:justify-center'>{tag}</TagLine>
            )}
            <h2 className="h2 text-left md:text-center">{title || ''}</h2>
            {text && (<p className="text-n-4 mt-4 body-2">{text}</p>)}
        </article>
    );
};