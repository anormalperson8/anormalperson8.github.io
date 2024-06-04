import ButtonGradient from "./assets/svg/ButtonGradient.jsx";
import MainHeader from "./components/MainHeader.jsx";
import Top from "./components/Top.jsx";
import Projects from "./components/Projects.jsx";
import Knowledge from "./components/Knowledge.jsx";
import Courses from "./components/Courses.jsx";
import IDPO from "./IDPO.jsx";
import IDPOTeaching from "./IDPOTeaching.jsx";

const MainPage = () => {

    return (
        <>
            <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
                <MainHeader/>
                <Top/>
                <Knowledge/>
                <Projects/>
                <Courses/>
                <IDPO/>
                <IDPOTeaching/>
            </div>

            <ButtonGradient/>

            {/*<h1 className="text-3xl font-bold">Hello World!</h1>*/}
        </>
    );
};

export default MainPage;
