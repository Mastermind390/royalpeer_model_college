import schoolImage from "../assets/images/school.jpg";
import Footer from "../components/Footer";
import HeaderNav from "../components/HeaderNav";

export default function VacancyPage () {
    return (
        <>

            <HeaderNav />
            <header class="relative mt-35 overflow-hidden bg-linear-to-r from-blue-900 to-blue-700 text-white">
                <div class="">


                    <div class="relative z-10 flex flex-col justify-center items-center px-6 py-12 sm:px-10 lg:px-14 lg:py-16">
                        <div className="bg-center opacity-15 absolute top-0 bottom-0 left-0 right-0" style={{ backgroundImage: `url(${schoolImage})`}}></div>

                        <h1 class="text-5xl font-black uppercase tracking-tight sm:text-6xl lg:text-7xl">
                        Vacancies
                        </h1>

                        <h2 class="mt-5 max-w-xl text-center text-2xl font-bold leading-tight sm:text-3xl">
                        Join Our Team of
                        Dedicated Educators
                        </h2>

                        <p class="mt-5 max-w-xl text-center text-sm leading-6 text-white/90 sm:text-base">
                        <strong>At ROYALPEER MODEL COLLEGE</strong>, we believe that quality education begins
                        with passionate, competent, and dedicated professionals. We are
                        constantly seeking talented individuals who are committed to academic
                        excellence, character development, and the overall growth of our students.
                        </p>

                        <p class="mt-4 max-w-xl text-sm leading-6 text-center text-white/90 sm:text-base">
                        We invite applications from suitably qualified and experienced
                        candidates to join our dynamic team.
                        </p>
                    </div>

      
                    {/* <div class="relative min-h-82.5 lg:min-h-full">
                        <img
                        src={schoolImage}
                        alt="Teacher helping students with their schoolwork"
                        class="absolute inset-0 h-full w-full object-cover object-center"
                        />
                        <div class="absolute inset-0 bg-linear-to-r from-blue-950 via-blue-700 to-transparent lg:from-blue-950 lg:via-transparent"></div>
                    </div> */}

                </div>

    
                <div class="relative -mt-2 h-10 overflow-hidden bg-white sm:h-14">
                    <div class="absolute left-[-5%] top-0 h-16 w-[110%] -rotate-2 bg-schoolRed"></div>
                    <div class="absolute left-[-5%] -top-3 h-14 w-[110%] -rotate-2 bg-white"></div>
                </div>
            </header>

  
            <main class="lg:mx-16 px-5 pb-8 sm:px-8 lg:px-10">

                <section class="grid gap-5 md:grid-cols-2">

                
                    <article class="rounded-xl border border-slate-200 bg-white p-6 shadow-soft sm:p-7">
                        <div class="flex items-center gap-4">
                            <div class="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-[#062B73] text-2xl text-white">
                                💼
                            </div>
                            <div>
                                <h2 class="text-xl font-extrabold uppercase text-blue-900 sm:text-2xl">
                                Available Positions
                                </h2>
                                <div class="mt-2 h-1 w-11 bg-[#062B73]"></div>
                            </div>
                        </div>

                        <ul class="mt-6 divide-y divide-slate-200">
                            <li class="flex items-center gap-3 py-3">
                                <span class="text-royal">●</span>
                                <span>Subject Teachers</span>
                            </li>
                            <li class="flex items-center gap-3 py-3">
                                <span class="text-royal">●</span>
                                <span>Class Teachers</span>
                            </li>
                            <li class="flex items-center gap-3 py-3">
                                <span class="text-royal">●</span>
                                <span>Early Years Teachers</span>
                            </li>
                            <li class="flex items-center gap-3 py-3">
                                <span class="text-royal">●</span>
                                <span>E.t.c</span>
                            </li>
                        </ul>
                    </article>

                    
                    <article class="rounded-xl border border-slate-200 bg-white p-6 shadow-soft sm:p-7">
                        <div class="flex items-center gap-4">
                            
                            <div>
                                <h2 class="text-xl font-extrabold uppercase text-[#E52525] sm:text-2xl">
                                Requirements
                                </h2>
                                <div class="mt-2 h-1 w-11 bg-schoolRed"></div>
                            </div>
                        </div>

                        <p class="mt-6 font-bold text-red-500">Applicants should:</p>

                        <ul class="mt-2 space-y-3 text-sm leading-5 sm:text-base">
                        <li class="flex gap-3">
                            <span class="mt-1 text-[#E52525]">●</span>
                            <span>Possess relevant academic and professional qualifications.</span>
                        </li>
                        <li class="flex gap-3">
                            <span class="mt-1 text-[#E52525]">●</span>
                            <span>Have good communication and interpersonal skills.</span>
                        </li>
                        <li class="flex gap-3">
                            <span class="mt-1 text-[#E52525]">●</span>
                            <span>Demonstrate passion for teaching and working with children.</span>
                        </li>
                        <li class="flex gap-3">
                            <span class="mt-1 text-[#E52525]">●</span>
                            <span>Be responsible, disciplined, and dedicated to their duties.</span>
                        </li>
                        <li class="flex gap-3">
                            <span class="mt-1 text-[#E52525]">●</span>
                            <span>Be willing to work collaboratively with other members of staff.</span>
                        </li>
                        <li class="flex gap-3">
                            <span class="mt-1 text-[#E52525]">●</span>
                            <span>Have relevant teaching experience where applicable.</span>
                        </li>
                        <li class="flex gap-3">
                            <span class="mt-1 text-[#E52525]">●</span>
                            <span>Demonstrate commitment to the school's vision, values, and standards.</span>
                        </li>
                        </ul>
                    </article>

                    
                    <article class="rounded-xl border border-slate-200 bg-white p-6 shadow-soft sm:p-7">
                        <div class="flex items-center gap-4">
                        <div>
                            <h2 class="text-xl font-extrabold uppercase text-blue-900 sm:text-2xl">
                            Why Join Us?
                            </h2>
                            <div class="mt-2 h-1 w-11 bg-[#062B73]"></div>
                        </div>
                        </div>

                        <p class="mt-6 text-sm leading-6 sm:text-base">
                        At Royalpeer College, we provide an enabling environment where staff
                        can develop professionally, contribute meaningfully to education, and
                        make a positive impact in the lives of young people.
                        </p>

                        <p class="mt-5 font-bold leading-6 text-royal">
                        If you are passionate about education and ready to make a difference,
                        we would love to hear from you.
                        </p>
                    </article>

                    
                    <article class="rounded-xl border border-slate-200 bg-white p-6 shadow-soft sm:p-7">
                        <div class="flex items-center gap-4">
                           
                            <div>
                                <h2 class="text-xl font-extrabold uppercase text-[#E52525] sm:text-2xl">
                                How To Apply
                                </h2>
                                <div class="mt-2 h-1 w-11 bg-schoolRed"></div>
                            </div>
                        </div>

                        <p class="mt-6 text-sm leading-6 sm:text-base">
                        Interested candidates should submit their Curriculum Vitae (CV) and a
                        brief application letter through our recruitment channel (WhatsApp
                        link below) or contact the school administration for further information.
                        </p>

                        <a
                        href="https://wa.me/2347035472581"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="mt-5 flex items-center gap-4 rounded-xl bg-slate-100 p-4 transition hover:bg-slate-200"
                        >
                        <span class="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-blue-500 text-2xl text-white">
                            ☎
                        </span>
                        <span>
                            <span class="block font-semibold text-royal">Apply via WhatsApp</span>
                            <span class="block text-xl font-extrabold text-[#E52525] sm:text-2xl">
                            +234 703 547 2581
                            </span>
                        </span>
                        </a>

                        <p class="mt-4 text-sm text-slate-600">
                        ⓘ Only shortlisted candidates will be contacted for an interview.
                        </p>
                    </article>
                </section>


                <section>
                    <div className="bg-blue-900 py-5 px-3 lg:mx-20 rounded-lg my-10">
                        <p className="text-center text-white font-bold ">
                            Come and be part of a team committed to raising confident, knowledgeable, disciplined,and future-ready students.
                        </p>
                    </div>
                </section>
            </main>

            <Footer />

        </>
    )
}