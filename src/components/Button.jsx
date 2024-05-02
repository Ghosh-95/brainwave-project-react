import ButtonSvg from "../assets/svg/ButtonSvg";

export default function Button({ className, href, white, px, children, onClick }) {
    const btnClassStyles = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${px || 'px-7'} ${white ? 'text-n-8' : 'text-n-1'} ${className || ''}`;

    const spanClassStyles = `relative z-10`;

    function renderButton() {
        return (
            <button onClick={onClick} className={btnClassStyles}>
                <span className={spanClassStyles}>{children}</span>
                {ButtonSvg(white)}
            </button>
        )
    };

    function renderLink() {
        return (
            <a href={href} className={btnClassStyles}>
                <span className={spanClassStyles}>{children}</span>
                {ButtonSvg(white)}
            </a>
        )
    }

    return href ? renderLink() : renderButton();
}