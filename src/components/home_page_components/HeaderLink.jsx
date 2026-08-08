export default function HeaderLink({destination, title}) {
    return (
        <div className=" bg-red-400 px-7 py-6 hover:bg-amber-400">
            <li>
                <a href={destination} className="text-lg text-white"> {title} </a>
            </li>
        </div>
    )
}