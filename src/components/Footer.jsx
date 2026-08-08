import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <>
            <div className="w-full bg-blue-900 px-7 lg:px-20 py-10">
                <div className="lg:flex lg:justify-between lg:items-start">
                    <div className="flex items-center gap-5">
                        <img src="../src/assets/images/royal_logo.jpg" alt="" className="w-20 lg:w-35 rounded-full" />
                        <h2 className="text-2xl lg:text-3xl
                        text-white font-black">ROYALPEER MODEL <br /> COLLEGE</h2>
                    </div>
                    <div className="my-10">
                        <h2 className="font-bold text-white text-xl">USEFUL LINKS</h2>
                        <ul className="mt-3">
                            <li className="mb-3"><Link to="/about" className="text-white">ABOUT THE SCHOOL</Link></li>
                            {/* <li className="mb-3"><Link to="" className="text-white">ABOUT THE PROPRIETRESS</Link></li> */}
                            <li className="mb-3"><Link to="/" className="text-white">VACANCIES</Link></li>
                            <li className="mb-3"><Link to="/gallery" className="text-white">GALLERY</Link></li>
                            <li className="mb-3"><Link to="/footage" className="text-white">FOOTAGES</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="flex gap-7 flex-col">
                    <div>
                        <h1 className="text-xl font-black text-white">Address</h1>
                        <p className="text-white text-m">Behind 2nd Buga Block Industry,<br /> Oluwo-oshin Town, Gbarinmole, Ofada, Mokoloki, Ogun state.</p>
                    </div>
                    <div>
                        <h1 className="text-xl font-black text-white ">Email Address</h1>
                        <p className="text-white text-m">royalpeeracademy@yahoo.com <br />
                        royalpeeracademy@gmail.com</p>
                    </div>
                    <div>
                        <h1 className="text-xl font-black text-white">Contacts</h1>
                        <p className="text-white text-m">08037279079, 08036627540</p>
                    </div>
                </div>
            </div>
        </>
    )
}