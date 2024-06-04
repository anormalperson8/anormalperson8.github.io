import {companyLogos} from "../constants/index.js";

const Logos = ({className}) => {
    return <div className={className}>
        <h5 className={"tagline mb-6 text-center text-n-1/85"}>You can find me at the following platforms</h5>
        <ul className={"flex"}>
            {companyLogos.map((contact, index) => (
                <li className={"flex justify-center items-center flex-1 h-[8.5rem]"} key={index}>
                    <a target="_blank" rel="noopener noreferrer" href={contact.link}>
                        <img src={contact.imageUrl} width={52} alt={contact}/>
                    </a>
                </li>
            ))}
        </ul>
    </div>
}

export default Logos;