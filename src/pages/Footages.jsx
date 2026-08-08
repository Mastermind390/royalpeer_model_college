import HeaderNav from "../components/HeaderNav";
import hall from "../assets/videos/hall.mp4";
import ict from "../assets/videos/ict.mp4";
import laboratory from "../assets/videos/laboratory.mp4";
import laboratory2 from "../assets/videos/laboratory2.mp4";
import main from "../assets/videos/main.mp4";
import bus from "../assets/videos/school_bus.mp4";
import Footer from "../components/Footer";

export default function FootagePage() {
    return (
        <>
            <HeaderNav />
            <section className="mt-40 mx-5 flex justify-center">
                <div>
                    <video className="rounded-xl" controls>
                        <source src={hall} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </section>

            <section className="mt-10 mx-5 flex justify-center">
                <div>
                    <video className="rounded-xl" controls>
                        <source src={ict} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </section>

            <section className="mt-10 mx-5 flex justify-center">
                <div>
                    <video className="rounded-xl" controls>
                        <source src={laboratory} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </section>

            <section className="mt-10 mx-5 flex justify-center">
                <div>
                    <video className="rounded-xl" controls>
                        <source src={laboratory2} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </section>

            <section className="mt-10 mx-5 flex justify-center">
                <div>
                    <video className="rounded-xl" controls>
                        <source src={main} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </section>

            <section className="mt-10 mx-5 flex justify-center mb-20">
                <div>
                    <video className="rounded-xl" controls>
                        <source src={bus} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </section>

            <Footer />
        </>
    )
}