import HeaderLink from "./home_page_components/HeaderLink"
import logo from "../assets/images/royal_logo.jpg";
import burger from "../assets/images/burger.svg";
import cancel from "../assets/images/cancel.svg";

import { useState } from "react";
import { Link } from "react-router-dom";
import DesktopLink from "./DesktopLink";

export default function HeaderNav() {

    let [showMenu, setShowMenu] = useState(false)

    function toggleShowMenu() {
        setShowMenu(!showMenu)
        // console.log(!showMenu)
    }

    return (
        <div className="z-100 absolute top-8 flex justify-between right-0 left-0 px-8 items-center">
            <Link to="/"><img className="w-20 rounded-full" src={logo} alt="" /></Link>
            <button className="flex justify-center items-center" onClick={toggleShowMenu}>
                {showMenu ? <img src={cancel} alt="" srcset="" className="w-15 bg-blue-900 rounded-lg"/> : <img src={burger} alt="" srcset="" className="w-15 lg:hidden bg-blue-900 rounded-lg"/>}
            </button>
            <div className="bg-blue-950 px-12 py-7 rounded-full hidden lg:block">
                <DesktopLink title={'ABOUT THE SCHOOL'} destination={"/about"}/>
                <DesktopLink title={'VACANCIES'} destination={""}/>
                <DesktopLink title={'FOOTAGES'} destination={"/footage"}/>
                <DesktopLink title={'GALLERY'} destination={"/gallery"}/>
            </div>
            
            <div className={`absolute top-20 left-0 right-0 transition-all duration-300 bg-amber-400 ${showMenu ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <ul>
                    <HeaderLink title={"ABOUT THE SCHOOL"} destination={"/about"}/>
                    {/* <HeaderLink title={"ABOUT THE PROPRIETRESS"} destination={""}/> */}
                    <HeaderLink title={"VACANCIES"} destination={""}/>
                    <HeaderLink title={"FOOTAGES"} destination={"/footage"}/>
                    <HeaderLink title={"GALLERY"} destination={"/gallery"}/>
                </ul>
            </div>
        </div>
        
    )
}