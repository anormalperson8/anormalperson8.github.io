import {useState} from "react";
import {useLocation} from "react-router-dom";
import {disablePageScroll, enablePageScroll} from "scroll-lock";

import lurk from "../assets/sunnylurking.png"
import lurkInv from "../assets/sunnylurkinginverted.png"
import  {mainNavigation} from "../constants/index.js";
import Button from "./Button.jsx";
import MenuSvg from "../assets/svg/MenuSvg.jsx";
import {HamburgerMenu} from "./design/Header.jsx";

const MainHeader = () => {
    const pathName = useLocation();
    const [openNav, setOpenNav] = useState(false);

    const toggle = () => {openNav ? enablePageScroll() : disablePageScroll(); setOpenNav(!openNav);};
    const click = () => {if (openNav) {enablePageScroll(); setOpenNav(false);}};


    return (
        <div className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 
            lg:bg-n-8/90 lg:backdrop-blur-sm ${openNav ? "bg-n-8" : "bg-n-8/50 backdrop-blur-sm"}`
        }>
            <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">

                <a className={"block mr-auto w-[60px] xl:mr-8"} href={"#top"}>
                    <img src={lurk} width={60} height={60} alt={"lurking"}/>
                </a>

                <nav
                    className={`${openNav ? "flex" : "hidden"} fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}>
                    <div className={"relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row"}>
                        {mainNavigation.map(
                            (i) => (
                                <a key={i.id} href={i.url} onClick={click} className={
                                    `block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-7 
                                    ${i.onlyMobile ? "lg:hidden" : ""} px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-lg lg:font-semibold  
                                     lg:leading-5 lg:hover:text-color-7 xl:px-12 ${i.url.slice(12, i.url.length) === pathName.hash ? 'z-2 lg:text-n-1' : 'lg:text-n-1/50'}`
                                }>
                                    {i.title}
                                </a>)
                        )}

                    </div>
                    <HamburgerMenu/>
                </nav>

                {/*<a className={"button hidden mr-8 text-n-1/50 transition-colors hover:text-color-7 lg:block lg:text-lg"}*/}
                {/*   href="#nav4">*/}
                {/*    Link Thing*/}
                {/*</a>*/}

                {/*<Button className={"hidden lg:flex lg:text-lg"} href="/teaching">*/}
                {/*    Teaching*/}
                {/*</Button>*/}

                <Button className={`ml-auto lg:hidden`} px={"px-4"} onClick={toggle}>
                    <MenuSvg openNavigation={openNav}/>
                </Button>

                <a className={`hidden lg:block w-[60px] xl:ml-8`} href={"#top"}>
                    <img src={lurkInv} width={60} height={60} alt={"lurkingInv"}/>
                </a>
            </div>
        </div>
    )

}

export default MainHeader;
