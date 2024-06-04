import lurk from "../assets/sunnylurking.png"
import lurkInv from "../assets/sunnylurkinginverted.png"
import Button from "./Button.jsx";
import MenuSvg from "../assets/svg/MenuSvg.jsx";
import {useState} from "react";
import {disablePageScroll, enablePageScroll} from "scroll-lock";
import {teachersNav} from "../constants/index.js";
import {HamburgerMenu} from "./design/Header.jsx";
import {useLocation} from "react-router-dom";

const IDPOTeachingHeader = () => {
    const pathName = useLocation();

    const [openNav, setOpenNav] = useState(false);

    const toggle = () => {openNav ? enablePageScroll() : disablePageScroll(); setOpenNav(!openNav);};
    const click = () => {if (openNav) {enablePageScroll(); setOpenNav(false);}};

    return (
        <div className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 
            lg:bg-n-8/90 lg:backdrop-blur-sm "bg-n-8/50 backdrop-blur-sm`
        }>
            <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
                <p className={"block mr-auto w-[60px] xl:mr-8"}>
                    <img src={lurk} width={60} height={60} alt={"lurking"}/>
                </p>

                <div
                    className={"hidden fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent"}>
                    <div className={"relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row"}>
                        <p className={"block text-xl"}>HKUST Future-Ready Scholars</p>
                    </div>
                </div>
                <p className={"flex mr-3 lg:hidden"}>
                    <p className={"block text-sm"}>HKUST Future-Ready Scholars</p>
                </p>
                <nav
                    className={`${openNav ? "flex" : "hidden"} fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}>
                    <div className={"relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row"}>
                        {teachersNav.map(
                            (i) => (
                                <a key={i.id} href={i.url} onClick={click} className={
                                    `block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-7 
                                    ${i.onlyMobile ? "lg:hidden" : ""} px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-lg lg:font-semibold  
                                     lg:leading-5 lg:hover:text-color-7 xl:px-12 ${i.url.slice(18, i.url.length) === pathName.hash ? 'z-2 lg:text-n-1' : 'lg:text-n-1/50'}`
                                }>
                                    {i.title}
                                </a>)
                        )}

                    </div>
                    <HamburgerMenu/>
                </nav>
                <Button className={"hidden text-xs lg:flex lg:text-lg"} href="/teaching/students">
                    {"Student's page"}
                </Button>
                <Button className={`ml-auto lg:hidden`} px={"px-4"} onClick={toggle}>
                    <MenuSvg openNavigation={openNav}/>
                </Button>
                <p className={`hidden lg:block w-[60px] xl:ml-8`}>
                    <img className={"ml-auto"} src={lurkInv} width={60} height={60} alt={"lurkingInv"}/>
                </p>
            </div>
        </div>
    )

}

export default IDPOTeachingHeader;
