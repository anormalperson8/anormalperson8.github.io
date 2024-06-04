import ButtonSvg from "../assets/svg/ButtonSvg.jsx";

const Button = ({className, href, onClick, children, px, white}) => {
    const classes = `button relative inline-flex items-center justify-center h-11 transition-colors text-n-1/50
    hover:text-color-7 ${px || "px-7"} ${white ? "text-n-8" : "text-n-1"} ${className || ""}`;

    const spanClasses = 'relative z-10';


    const render = () => {
        return (
            <button className={classes} onClick={() => {onClick(); this.props.reload()}}>
                <span className={spanClasses}>{children}</span>
                {ButtonSvg(white)}
            </button>
        );
    }

    const renderWithLink = () => (
        <a href={href} className={classes}>
            <span className={spanClasses}>{children}</span>
            {ButtonSvg(white)}
        </a>
    )

    return href ? renderWithLink() : render();
};

export default Button;