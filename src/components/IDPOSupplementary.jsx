import Section from "./Section.jsx";
import Heading from "./Heading.jsx";
import {addFiles} from "../constants/index.js";
import Arrow from "../assets/svg/Arrow.jsx";
import {GradientLight} from "./design/Projects.jsx";
import Button from "./Button.jsx";

const IDPOSupplementary = () => {
    return (
        <Section crosses id={"supplementary"}>
            <div className={"container relative z-2"}>
                <Heading className={"md:max-w-md lg:max-w-2xl text-center"} title={"Additional Materials"}/>
                <div className={"flex flex-wrap gap-10 mb-10"}>
                    {addFiles.map((item) => (
                        <div className={"block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"}
                             style={{backgroundImage: `url(${item.backgroundUrl})`}} key={item.id}
                        >
                            <div className={"relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none"}>
                                <h5 className={"h5 mb-5"}>{item.title}</h5>
                                <p className={"body-2 mb-6 text-n-3 text-justify"}>{item.text}</p>
                                <a className={"flex items-center mt-auto pointer-events-auto"} target="_blank"
                                   rel="noopener noreferrer" href={item.link}>
                                    <img src={item.iconUrl} width={48} height={48} alt={item.title}/>
                                    <div
                                        className={"ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider"}>
                                        File
                                    </div>
                                    <Arrow/>
                                </a>
                            </div>
                            {item.light && <GradientLight/>}
                        </div>
                    ))}
                </div>
                <div className={"flex lg:hidden items-center text-center content-center mx-auto"}>
                    <Button className={"mx-auto flex mt-2"} href="/">
                        Return to home
                    </Button>
                </div>
            </div>
        </Section>);
};

export default IDPOSupplementary;
