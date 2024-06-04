import {useRef, useState} from "react";
import {ScrollParallax} from "react-just-parallax";
import Section from "./Section.jsx";
import Button from "./Button.jsx";
import {curve} from "../assets/index.js";
import {BackgroundCircles, BottomLine} from "./design/Top.jsx";
import Notification from "./Notification.jsx";
import Logos from "./Logos.jsx";

import sun from "../assets/sunny.png"

const Top = () => {
    const parallaxRef = useRef(null);
    const [count, increment] = useState(0);
    const [buttonText, setText] = useState(`Count is ${count} `);

    const changeText = () => {
        increment(count + 1);
        setText(`Count is ${count}`);
    }

    return (
        <Section
            className={"pt-[12rem] -mt-[5.25rem]"}
            crosses
            crossOffset={"lg:translate-y-[5.25rem]"}
            customPaddings
            id={"top"}
        >
            <div className={"container relative"} ref={parallaxRef}>
                <div className={"relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]"}>
                    <h1 className={"h1 mb-6"}>
                        Welcome to the webpage of
                        <span className={"inline-block relative"}>
                            Sunny <img src={curve} className={"absolute top-full left-0 w-full xl:-mt-2"} width={624} height={28} alt={"curve"}/>
                        </span>
                        !
                    </h1>
                    <p className={"body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8"}>
                        Feel free to explore around!<br/>
                        Have a counter button:
                    </p>
                    <Button white onClick={changeText} className={"text-base px-10"}>
                        {buttonText}
                    </Button>
                </div>
                <div className={"relative max-w-[23rem] mx-auto md:max-w-sm xl:mb-24"}>
                    <div className={"relative z-1 p-0.5 rounded-2xl "}> {/*bg-conic-gradient*/}
                        <div className={"relative bg-n-8 rounded-[1rem]"}>
                            <div className={"h-[1.4rem] rounded-t-[0.8rem]"}/>
                            <div className={"rounded-b-[0.9rem] overflow-hidden"}>
                                {/*<img src={sun} className={"w-full"} width={1024} height={490} alt={"hero"}/>*/}
                                {/*<ScrollParallax isAbsolutelyPositioned>*/}
                                {/*    <ul className={"hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex xl:translate-y-[10rem] xl:-translate-x-[15rem]"}*/}
                                {/*    >*/}
                                {/*        {heroIcons.map((icon, index) => (*/}
                                {/*            <li className={"p-5"} key={index}>*/}
                                {/*                <img src={icon} width={24} height={25} alt={icon}/>*/}
                                {/*            </li>*/}
                                {/*        ))}*/}
                                {/*    </ul>*/}
                                {/*</ScrollParallax>*/}
                                <ScrollParallax isAbsolutelyPositioned>
                                    <Notification className={"hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"}
                                                  title={"This website was last updated on..."}
                                    />
                                </ScrollParallax>
                            </div>
                        </div>
                        {/*<Gradient/>*/}
                    </div>
                    <div className={"absolute left-4 right-4 bottom-5 md:left-1/2 md:-translate-x-1/2 md:right-auto md:bottom-1.5 lg:w-[31rem] opacity-[.25]"}>
                        <img src={sun} className={"w-full"} width={1440} height={1800} />
                    </div>

                    <BackgroundCircles/>
                </div>
                <Logos className={"hidden relative z-10 mt-20 lg:block"}/>
            </div>
            <BottomLine/>
        </Section>
    );
};

export default Top;
