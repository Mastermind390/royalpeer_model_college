import HeaderLink from "./home_page_components/HeaderLink"
import logo from "../assets/images/royal_logo.jpg";
import burger from "../assets/images/burger.svg";
import cancel from "../assets/images/cancel.svg";

import { useState } from "react";

export default function HeaderNav() {

    let [showMenu, setShowMenu] = useState(false)

    function toggleShowMenu() {
        setShowMenu(!showMenu)
        // console.log(!showMenu)
    }

    return (
        <div className="z-100 absolute top-8 flex justify-between right-0 left-0 px-8 items-center">
            <img className="w-20 rounded-full" src={logo} alt="" />
            <button className="flex justify-center items-center" onClick={toggleShowMenu}>
                {showMenu ? <img src={cancel} alt="" srcset="" className="w-15 bg-blue-900 rounded-lg"/> : <img src={burger} alt="" srcset="" className="w-15 lg:hidden bg-blue-900 rounded-lg"/>}
            </button>
            <div className="bg-blue-950 px-6 py-7 rounded-full hidden lg:block">
                <a href="" className="bg-white p-4 m-1 text-sm rounded-full hover:bg-red-500 hover:duration-700 hover:text-white">ABOUT THE SCHOOL</a>
                <a href="" className="bg-white p-4 m-1 text-sm rounded-full hover:bg-red-500 hover:duration-700 hover:text-white">ABOUT THE PROPRIETRESS</a>
                <a href="" className="bg-white p-4 m-1 text-sm rounded-full hover:bg-red-500 hover:duration-700 hover:text-white">VACANCIES</a>
                <a href="" className="bg-white p-4 m-1 text-sm rounded-full hover:bg-red-500 hover:duration-700 hover:text-white">FOOTAGES</a>
                <a href="" className="bg-white p-4 m-1 text-sm rounded-full hover:bg-red-500 hover:duration-700 hover:text-white">GALLERY</a>
            </div>
            
            <div className={`absolute -top-8 left-0 transition-all duration-300 bg-amber-400 ${showMenu ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <ul>
                    <HeaderLink title={"ABOUT THE SCHOOL"} destination={""}/>
                    <HeaderLink title={"ABOUT THE PROPRIETRESS"} destination={""}/>
                    <HeaderLink title={"VACANCIES"} destination={""}/>
                    <HeaderLink title={"FOOTAGES"} destination={""}/>
                    <HeaderLink title={"GALLERY"} destination={""}/>
                </ul>
            </div>
        </div>
        
    )
}