import Section from "./Section.jsx";
import Heading from "./Heading.jsx";

const Courses = () => {
    return (
        <Section crosses id={"courses"}>
            <div className={"container relative z-2"}>
                <Heading className={"md:max-w-md lg:max-w-2xl text-center"} title={"Selected Courses Taken"}/>
            </div>
            <h5 className={"tagline -mt-12 mb-6 text-center text-n-1/85"}>Coming soon!</h5>
        </Section>
    );
};

export default Courses;