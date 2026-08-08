import { Link } from "react-router-dom";

export default function HeaderLink({destination, title}) {
    return (
        <li className="bg-red-500 p-4">
            <Link to={destination} className="text-lg text-white"> {title} </Link>
        </li>
        
    )
}