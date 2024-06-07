import {Link} from "react-router-dom";
import Section from "./Section.jsx";
import Heading from "./Heading.jsx";
import {files} from "../constants/index.js";
import Arrow from "../assets/svg/Arrow.jsx";
import {GradientLight} from "./design/Projects.jsx";

import ust from "../assets/ust.png"

const IDPOMaterials = () => {
    return (
        <Section crosses id={"teaching"}>
            <div className={"container relative z-2"}>
                <div className={"items-center text-center"}>
                    <Link target="_blank" rel="noopener noreferrer" to={"https://hkust.edu.hk"}>
                        <img src={ust} alt={"ust"} className={"mx-auto mb-5"}/>
                    </Link>
                    <h3 className={"mx-auto mb-5 h3 md:max-w-md lg:max-w-2xl text-center"}>
                        Future-Ready Scholars
                    </h3>
                    <h4 className={"mx-auto mb-5 h4 md:max-w-md lg:max-w-2xl text-center"}>
                        Introduction to Game Programming Using Python
                    </h4>
                    <h6 className={"h6 mb-5"}>
                        These are materials used for HKUST's Future-Ready Scholars event held on 20th April and 4th May
                        2024 <br/> for the course IDPO 2910: Undergraduate Teaching Opportunities.
                    </h6>
                    <h5 className={"tagline mb-5 text-center text-n-1/85"}>Download files below!</h5>
                </div>
                <h4 className={"mx-auto mb-5 h4 md:max-w-md lg:max-w-2xl text-center"}>
                    Announcements
                </h4>
                <div className={"border p-2 mx-6 overflow-hidden mb-10"}>
                    <p>
                        <b>26th April 2024</b><br/>
                        The PowerPoint file used for workshop 1 has been uploaded. <br/>
                        Reminder: Please email us with your <b>finished</b> Number Guessing Game file at&nbsp;
                        <a href="mailto:idpo2910-s24-g5-request@lists.ust.hk">idpo2910-s24-g5-request@lists.ust.hk</a> with
                        your full name to get a prize!<br/>
                        The deadline of this is 23:59 HKT on 2nd May, 2024.
                    </p>
                    <br/>
                    <p>
                        <b>5th May 2024</b><br/>
                        The answers for Number Guessing game and Hangman have been released.
                        For those who attended our workshop despite the bad weather conditions, thank you once
                        again!<br/> <br/>
                        Feel free to email us at <a
                        href="mailto:idpo2910-s24-g5-request@lists.ust.hk">idpo2910-s24-g5-request@lists.ust.hk</a>&nbsp;
                        for any questions about programming (Python or not), or even HKUST!
                    </p>
                    <br/>
                    <p>
                        <b>7th June 2024</b><br/>
                        The webpage has been updated! All materials, including the ones the instructors used are available down below!
                        Due to hosting limitations, the file download links below will lead you to a separate page. Please find the corresponding item there!
                        Sorry for any potential inconvenience caused.
                    </p>
                </div>
                <Heading className={"md:max-w-md lg:max-w-2xl text-center"} title={"Workshop Materials"}/>
                <div className={"flex flex-wrap gap-10 mb-10"}>
                    {files.map((item) => (
                        <div className={"block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"}
                             style={{backgroundImage: `url(${item.backgroundUrl})`}} key={item.id}
                        >
                            <div className={"relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none"}>
                                <h5 className={"h5 mb-5"}>{item.title}</h5>
                                <p className={"body-2 mb-6 text-n-3 text-justify"}>{item.text}</p>
                                <a className={"flex items-center mt-auto pointer-events-auto"} //target="_blank"
                                   rel="noopener noreferrer" href={"/pages/ustidpo.html"}>
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
        </Section>);
};

export default IDPOMaterials;
