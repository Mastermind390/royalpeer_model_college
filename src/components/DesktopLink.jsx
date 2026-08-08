import { NavLink } from "react-router-dom";


export default function DesktopLink({ title, destination }) {
    return (
        
            <NavLink
                to={destination}
                className={({ isActive }) =>
                    `p-4 m-1 text-sm rounded-full duration-300 ${
                        isActive
                            ? "bg-red-500 text-white"
                            : "bg-white text-black"
                    }`
                }
            >
                {title}
            </NavLink>
        
    );
}