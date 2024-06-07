import Section from "./Section.jsx";
import Heading from "./Heading.jsx";
import {lessonPlan} from "../constants/index.js";
import Arrow from "../assets/svg/Arrow.jsx";
import {GradientLight} from "./design/Projects.jsx";

const IDPOTeachingPlans = () => {
    return (
        <Section crosses id={"plans"}>
            <div className={"container relative z-2"}>
                <Heading id={"plans"} className={"md:max-w-md lg:max-w-2xl text-center"} title={"Lesson Plans"}/>
                <div className={"flex flex-wrap gap-10 mb-10"}>
                    {lessonPlan.map((item) => (
                        <div className={"block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"}
                             style={{backgroundImage: `url(${item.backgroundUrl})`}} key={item.id}
                        >
                            <div className={"relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none"}>
                                <h5 className={"h5 mb-5"}>{item.title}</h5>
                                <p className={"body-2 mb-6 text-n-3 text-justify"}>{item.text}</p>
                                <a className={"flex items-center mt-auto pointer-events-auto"} //target="_blank"
                                   rel="noopener noreferrer" href={"/pages/ustidpo-teaching.html"}>
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
            </div>
        </Section>
    );
};

export default IDPOTeachingPlans;
