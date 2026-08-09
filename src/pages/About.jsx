import HeaderNav from "../components/HeaderNav";
import q from "../assets/images/q.png";
import scope from "../assets/images/scope.png";
import target from "../assets/images/target.png";
import exc from "../assets/images/exc.png";
import hand from "../assets/images/hand.png";
import SectionHeader from "../components/SectionHeader";
import Footer from "../components/Footer";


export default function AboutPage () {
    return (
        <>
            <main>
                <HeaderNav />
                <section className="mt-35 mb-15 mx-10 lg:mx-30">
                    <SectionHeader title={'WHO WE ARE'}/>
                    <div className="flex items-center flex-col lg:gap-16 text-justify lg:flex-row lg:text-justify gap-8">
                        <p>Royalpeer model college is a dynamic and     forward thinking Nursery, Primary and Secondary school dedicated to nurturing excellence in academics, character and leadership. Founded with a vision to raise future leaders equipped with knowledge, discipline and creativity. Royalpeer has become a trusted name in quality education.
                            <br/><br />
                            We are committed to providing a balanced and holistic education that develop the intellectual, moral, and social potential of every child. Our environment is designed to inspire curiosity, encourage innovations, and instill values that prepare our students to thrive in today's ever-changing world.
                        </p>
                        <img src={q} className="w-50" alt="" />
                    </div>
                </section>

                <section className="mb-10 mx-10 lg:mx-30 lg:flex lg:flex-col lg:items-end">
                    <SectionHeader title={'OUR VISION'}/>
                    <div className="flex flex-col items-center gap-8 lg:gap-16 lg:flex-row lg:flex-row-reverse">
                        <p className="bg-blue-900 px-6 py-4 text-justify text-white">To be a leading educational institution known for academic excellence, sound character, and the development of future leaders who will make a positive impact in society.
                        </p>
                        <img src={scope} className="w-50" alt="" />
                    </div>
                </section>

                <section className="mb-15 mx-10 lg:mx-30">
                    <SectionHeader title={'OUR MISSION'}/>
                    <div className="flex items-center flex-col lg:gap-16 text-justify lg:flex-row lg:gap-4 lg:text-justify gap-8">
                        <p className="bg-red-500 px-6 py-4 text-white">To provide quality and include education that empowers students with knowledge, skills, and values through effective teaching facilities and moral guidance.

                        </p>
                        <img src={target} className="w-50" alt="" />
                    </div>
                </section>

                <section className="mb-10 mx-10 lg:mx-30 lg:flex lg:flex-col lg:items-end">
                    <SectionHeader title={'OUR CORE VALUES'}/>
                    <div className="flex flex-col items-center gap-8 lg:gap-10 lg:flex-row lg:flex-row-reverse">
                        <p className="px-6 py-4 text-justify"><strong>Excellence:</strong> We strive for the highest standards in academic and personal conduct.
                        <br /><br />
                        <strong>Integrity:</strong> We promote honesty, accountability, and strong moral principle.
                        <br /><br />
                        <strong>Discipline:</strong> We instill self-control and responsibility in our students.
                        <br /><br />
                        <strong>Innovation:</strong> We encourage creativity, problems solving, and actical thinking.
                        <br /><br />
                        <strong>Service:</strong> We teach our students to contribute meaningfully to their communities.

                        </p>
                        <img src={exc} className="w-60" alt="" />
                    </div>
                </section>

                <section className="mb-15 mx-10 lg:mx-30">
                    <SectionHeader title={'WHAT WE OFFER'}/>
                    <div className="flex items-center flex-col lg:gap-16 text-justify lg:flex-row lg:gap-4 lg:text-justify gap-8">
                        <p className="bg-blue-900 px-6 py-8 text-white">At Royalpeer Model College, we combine tradition with innovation to deliver a world-class educational experience. Our offerings include:
                        A well structured curriculum that meets national and global standards.
                        <br /><br />
                        Qualified and dedicated teachers passionate about student growth.
                        <br /><br />
                        Modern classroom and ICT facilities to support digital learning. Science laboraty for hand-on learning.
                        <br /><br />
                        Co-curricular activities such as debates, music, art, and sports to promote all-round development.
                        <br /><br />
                        A safe, clean, and nurturing learning environment where every student feels valued and motivated.
                        </p>
                        {/* <img src={target} className="w-50" alt="" /> */}
                    </div>
                </section>

                <section className="mb-10 mx-10 lg:mx-30 lg:flex lg:flex-col lg:items-end">
                    <SectionHeader title={'OUR COMMITMENT'}/>
                    <div className="flex flex-col items-center gap-8 lg:gap-10 lg:flex-row lg:flex-row-reverse">
                        <p className="px-6 py-4 text-justify">Every child at Royalpeer Model College is treated as a unique individual with limitless potential, we are commited to guiding them to discover their strength, pursue their passion, and grow into responsible, confident, and visionary leaders.
                        <br /><br />
                        At Royalpeer, education is not just about passing exams, it's about building lives, shaping destinies, and preparing students for the challenges and opportunities of the future.

                        </p>
                        <img src={hand} className="w-60" alt="" />
                    </div>
                </section>

                <section className="mb-10">
                    <div className="bg-blue-900 flex justify-center py-4 mb-5 text-xl font-bold text-white lg:text-2xl">
                        JOIN THE ROYALPEER FAMILY
                    </div>
                    <p className="text-center mx-10 lg:mx-30">Becoming part of Royalpeer Model College means joining a community that believes in excellence, integrity, and lifelong learning. We invite parents and guardians who shares our vision to partner with us in nurturing the next generation of leaders.</p>
                </section>
                <Footer />
            </main>

        </>
    )
}