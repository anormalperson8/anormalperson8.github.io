import Section from "./Section.jsx";
import {
    circleLogos,
    selfIntro,
    selfInfo,
    programmingLang,
    languages,
    markUpLang, otherTechSkills
} from "../constants/index.js";
import {LeftCurve, RightCurve} from "./design/Knowledge.jsx";
import sunnyThink from "../assets/sunnythink.png"

const Knowledge = () => {
    return (
        <Section id={"knowledge"}>
            <div className={"container lg:flex"}>
                <div className={"max-w-[25rem]"}>
                    <h2 className={"h2 mb-4 md:mb-8"}>About Me</h2>
                    <h5 className={"h5 mb-4 md:mb-8"}>Introduction</h5>
                    <p className={"body-2 mb-4 text-n-3 text-justify timd:mb-8 lg:mb-12 lg:w-[32rem] lg:mx-auto"}>
                        {selfIntro}
                    </p>
                    <ul className={"max-w-[22rem] mb-10 md:mb-14"}>
                        {selfInfo.map((item) => (
                            <li className={"mb-3 py-3"} key={item.id}>
                                <div className={"flex items-center"}>
                                    {/*<img src={check} width={24} height={24} alt={"check"}/>*/}
                                    <h6 className={"body-2 -mt-5"}>- {item.title}</h6>
                                </div>
                                {item.text &&
                                    <a target="_blank" rel="noopener noreferrer"
                                       className={"body-2 mt-3 text-n-4 "}
                                       href={item.link}>
                                        (Link to {item.text})
                                    </a>
                                }
                            </li>
                        ))}
                    </ul>
                    <h5 className={"h5 mb-4 md:mb-8"}>Spoken Languages</h5>
                    <p className={"body-2 mb-4 text-n-3 text-justify timd:mb-8 lg:mb-12 lg:w-[32rem] lg:mx-auto"}>
                        These are the languages that I speak/am learning.
                    </p>
                    <ul className={"max-w-[22rem] mb-10 md:mb-14"}>
                        {languages.map((item) => (
                            <li className={"mb-3 py-3"} key={item.id}>
                                <div className={"flex items-center"}>
                                    {/*<img src={check} width={24} height={24} alt={"check"}/>*/}
                                    <h6 className={"body-2 -mt-5"}>- {item.title}</h6>
                                </div>
                                {item.text &&
                                    <p className={"body-2 mt-3 text-n-4 "}>{item.text}</p>
                                }
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className={"container lg:flex"}>
                <div className={"max-w-[25rem]"}>
                    <h5 className={"h5 mb-1 md:mb-2"}>Skills</h5>
                    <h6 className={"h6 mb-4 md:mb-8"}>Programming Languages</h6>
                    <ul className={"max-w-[22rem] mb-10 md:mb-14"}>
                        {programmingLang.map((item) => (
                            <li className={"mb-3 py-3"} key={item.id}>
                                <div className={"flex items-center"}>
                                    {/*<img src={check} width={24} height={24} alt={"check"}/>*/}
                                    <h6 className={"body-2 -mt-5"}>- {item.title}</h6>
                                </div>
                                {item.text && (<p className={"body-2 mt-3 text-n-4"}>{item.text}</p>)}
                            </li>
                        ))}
                    </ul>
                    <h6 className={"h6 mb-4 md:mb-8"}>Markup Languages</h6>
                    <ul className={"max-w-[22rem] mb-10 md:mb-14"}>
                        {markUpLang.map((item) => (
                            <li className={"mb-3 py-3"} key={item.id}>
                                <div className={"flex items-center"}>
                                    {/*<img src={check} width={24} height={24} alt={"check"}/>*/}
                                    <h6 className={"body-2 -mt-5"}>- {item.title}</h6>
                                </div>
                                {item.text && (<p className={"body-2 mt-3 text-n-4"}>{item.text}</p>)}
                            </li>
                        ))}
                    </ul>
                    <h6 className={"h6 mb-4 md:mb-8"}>Other Technical Skills</h6>
                    <ul className={"max-w-[22rem] mb-10 md:mb-14"}>
                        {otherTechSkills.map((item) => (
                            <li className={"mb-3 py-3"} key={item.id}>
                                <div className={"flex items-center"}>
                                    {/*<img src={check} width={24} height={24} alt={"check"}/>*/}
                                    <h6 className={"body-2 -mt-5"}>- {item.title}</h6>
                                </div>
                                {item.text && (<p className={"body-2 mt-3 text-n-4"}>{item.text}</p>)}
                            </li>
                        ))}
                    </ul>
                    {/*<Button>A button</Button>*/}
                </div>
                <div className={"lg:ml-auto xl:w-[38rem] mt-4"}>
                    {/*<p className={"body-2 mb-8 text-n-4 md:mb-16 lg:mb-32 lg:w-[32rem] lg:mx-auto"}>*/}
                    {/*    {contactText}*/}
                    {/*</p>*/}

                    <div
                        className={"relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale-75 md:scale-100"}>
                        <div className={"flex w-60 aspect-square m-auto border border-n-6 rounded-full"}>
                            <div
                                className={"w-[6rem] aspect-square m-auto p-[0.2rem] bg-transparent rounded-full"}> {/*bg-conic-gradient*/}
                                <div
                                    className={"flex items-center justify-center w-full h-full bg-n-8 rounded-full"}>
                                    <img src={sunnyThink} width={48} height={48} alt={"symbol"}/>
                                </div>
                            </div>
                        </div>

                        <ul>
                            {circleLogos.map((item, index) => (
                                <li key={item.id}
                                    className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${index * 360 / circleLogos.length}`}>
                                    <div
                                        className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${index * 360 / circleLogos.length}`}>
                                        <img src={item.icon} className={"m-auto"} width={item.width}
                                             height={item.height} alt={item.title}/>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <LeftCurve/>
                        <RightCurve/>
                    </div>
                </div>
            </div>
        </Section>

    );
};

export default Knowledge;
