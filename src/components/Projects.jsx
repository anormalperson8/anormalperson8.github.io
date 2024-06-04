import Section from "./Section.jsx";
import Heading from "./Heading.jsx";
import {projects} from "../constants/index.js";
import Arrow from "../assets/svg/Arrow.jsx";
import {GradientLight} from "./design/Projects.jsx";
import ClipPath from "../assets/svg/ClipPath.jsx";

const Projects = () => {
    return <Section crosses id={"project"}>
        <div className={"container relative z-2"}>
            <Heading className={"md:max-w-md lg:max-w-2xl text-center"} title={"Selected Projects"}/>
            <h5 className={"tagline -mt-12 mb-6 text-center text-n-1/85"}></h5>
            <div className={"flex flex-wrap gap-10 mb-10"}>
                {projects.map((item) => (
                    <div className={"block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"}
                         style={{backgroundImage: `url(${item.backgroundUrl})`}} key={item.id}
                    >
                        <div className={"relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none"}>
                            <h5 className={"h5 mb-5"}>{item.title}</h5>
                            <p className={"body-2 mb-6 text-n-3 text-justify"}>{item.text}<br/>{item.state}</p>
                            <a className={"flex items-center mt-auto pointer-events-auto"} target="_blank"
                               rel="noopener noreferrer" href={item.link}>
                                <img src={item.iconUrl} width={48} height={48} alt={item.title}/>
                                <div
                                    className={"ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider"}>
                                    Source
                                </div>
                                <Arrow/>
                            </a>
                        </div>
                        {item.light && <GradientLight/>}
                        <div className={"absolute inset-0.5 bg-n-8"} style={{clipPath: "url(#projects)"}}>
                            <div className={"absolute inset-0 opacity-0 transition-opacity hover:opacity-10"}>
                                {item.imageUrl && <img src={item.imageUrl} width={380} height={362} alt={item.title}
                                     className={"w-full h-full object-cover"}/>}
                            </div>
                        </div>
                        <ClipPath/>
                    </div>
                ))}
            </div>
        </div>
    </Section>;
};

export default Projects;