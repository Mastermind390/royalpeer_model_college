import { useState } from "react"
import HeaderLink from "./HeaderLink"
import HeaderNav from "../HeaderNav"
import Footer from "../Footer"

export function Header() {
    let [showMenu, setShowMenu] = useState(false)
    let [isExpanded, setIsExpanded] = useState(false)

   function toggleShowMenu() {
        setShowMenu(!showMenu)
        // console.log(!showMenu)
    }

    const fullText = `It is with great joy and pride, that I welcome you to Royalpeer Model College, a place where excellence is not just taught but lived everyday. At Royalpeer, we believe that education goes beyond the walls of a classroom. It is about shaping characters, nurturing potential, and preparing young minds to thrive in a facts-changing world. \n\nSince our inception, our mission has been clear to raise disciplined, confident and academically sound students who will become global leaders and change-makers. We combine strong moral values with high academic standards, ensuring that every students recieves a balanced and holistic education. \n\nOur dedicated team of teachers and staffs are passionate about teaching and mentoring. They work tirelessly to create an engaging, inclusive and supporting learning environment where every child feels seen, heard and valued. Through innovative teaching methods, modern facilities, and broad curriculum, we inspire curiosity, creativity, and lifelong love for learning. \n\nBeyond academics, we encourage our students to develop skills in leadership, sports, arts, and community service. We believe that true education molds not only the mind but also the heart and the hands. \n\nAs you explore our website, i invite you to discover what makes Royal Peer Model College a unique place to learn and grow. Whether you are a parent seeking the best for your child, a student eager to learn, or a visitor interested in our vision, you are warmly welcome to be part of our Royalpeer family. \n\nTogether, let us continue to build a community of leaders who stand out for their knowledge, integrity and excellence. Once again, welcome to Royalpeer Model College-where excellence is our culture. \n\nSigned Hassan (Mrs) Principal, Royalpeer Model College`

    const getDisplayText = () => {
        if (isExpanded) {
            return fullText
        }
        // Truncate to first 200 characters and add ellipsis
        return fullText.slice(0, 300) + "..."
    }
    
    return (
        <div className="bg-blue-900 w-full h-100 relative flex flex-col lg:h-150">
            <div className="bg-[url(src/assets/images/school.jpg)] bg-center opacity-20 absolute top-0 bottom-0 left-0 right-0 ">
                </div>
                <HeaderNav />
                {/* <div>qwdqwqw</div> */}
                <div className="flex justify-center mt-40">
                    <h1 className="text-3xl lg:text-6xl text-white font-extrabold text-center ">ROYALPEER MODEL <br></br> COLLEGE</h1>
                </div>
                <div className="flex flex-col justify-center items-center mx-3 mt-10 lg:mt-35 bg-gray-300 py-9 px-6 md:mx-15 lg:mx-25 relative">
                    <div className="bg-red-700 px-6 py-3 lg:text-3xl rounded-full absolute -top-5">
                        <p className="text-sm text-white font-bold lg:text-2xl">WELCOME ADDRESS FROM THE PRINCIPAL</p>
                    </div>
                    <p className="mb-4 lg:text-xl " style={{ whiteSpace: 'pre-line' }}>
                    {getDisplayText()}
                    </p>
                    <div>
                        <button 
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                    >
                        {isExpanded ? "See Less ↑" : "See More ↓"}
                    </button>
                    </div>
                </div>
                <div className="mt-18 flex justify-center flex-col lg:flex-row lg:gap-20 lg:mx-26 lg:items-start lg:justify-items-start mb-10">
                    <div className="mx-7 lg:mx-0 md:mx-34 px-8 py-13 bg-blue-900 relative flex justify-center">
                    <div className="px-10 py-4 bg-red-600 -top-6 rounded-full absolute">
                        <p className="text-white font-bold">THE SCHOOL ANTHEM</p>
                    </div>
                    <p className="text-white text-lg">
                        In the halls of Royalpeer <br /> We stand tall and proud <br /> Royalpeer!! <br /> Founded 2019  <br /> Our voices clear and loud <br />Home of total education <br /> Our motto guides the way <br /> Preparing, minds for the future With every passing day <br /> In pursuit of excellence <br /> Royalpeer school <br /> We never walk alone.
                    </p>
                </div>

                <div className="mt-18 flex justify-center">
                    <div className="mx-7 px-10 py-13 bg-blue-900 relative flex justify-center lg:mx-0">
                    <div className="px-10 py-4 bg-red-600 -top-6 rounded-full absolute">
                        <p className="text-white font-bold">THE SCHOOL PLEDGE</p>
                    </div>
                    <p className="text-white text-lg">
                        I pledge to uphold the values of my school,  <br />with pride and intergrity. <br /> I commit to pursuing excellence <br /> in all my endeavours guided by the principles of respect, <br /> resilience and responsibility <br /> So help me God. Amen
                    </p>
                </div>
            </div>
        </div>
         <div className="flex justify-center my-10 py-5 bg-blue-200">
            <audio controls className="w-80">
                <source src="../src/assets/audio/royalpeer_anthem.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
        </div>
        <Footer />
        </div>
    )
}