import HeaderNav from "../components/HeaderNav";
import bigAunty from "../assets/images/big-aunty.png";
import chemistry from "../assets/images/Chemistry.jpg";
import excursion from "../assets/images/excursion.jpg";
import exam from "../assets/images/hall.jpg";
import ict from "../assets/images/ict.jpg";
import biology from "../assets/images/biology.jpeg";
import hall from "../assets/images/hall2.jpg";
import excursion2 from "../assets/images/excursion2.jpg";
import library from "../assets/images/library.jpg";
import physics from "../assets/images/physics.jpg";
import workshop from "../assets/images/workshop.jpg";
import PictureTitles from "../components/PicturesTitles";
import Footer from "../components/Footer";

export default function GalleryPage () {
    return (
        <>
            <HeaderNav />
            <section className="flex flex-col justify-center items-center mt-40">
                <img src={bigAunty} alt="" className="w-50 lg:w-70"/>
                <div>
                    <PictureTitles title={'Our Proprietress'} />
                </div>
            </section>

            <section className="flex flex-col lg:flex-row lg:gap-17 gap-8 justify-center mt-10">
                <div className="flex justify-center flex-col items-center">
                    <img src={chemistry} alt="" className="w-70 lg:w-80"/>
                    <PictureTitles title={'Chemistry Pratical'} />
                </div>
                <div className="flex justify-center flex-col items-center">
                    <img src={excursion} alt="" className="w-70 lg:w-100"/>
                    <PictureTitles title={'Excursion'} />
                </div>
            </section>

            <section className="flex flex-col lg:flex-row justify-center items-center gap-8 mt-10">
                <div className="flex flex-col items-center">
                    <img src={exam} alt="" className="w-70"/>
                    <PictureTitles title={'Exam Ongoing'} />
                </div>
                <div  className="flex flex-col items-center">
                    <img src={ict} alt="" className="w-70"/>
                    <PictureTitles title={'ICT Pratical'} />
                </div>
                <div  className="flex flex-col items-center">
                    <img src={biology} alt="" className="w-70"/>
                    <PictureTitles title={'Bology Lab'} />
                </div>
            </section>

            <section className="flex flex-col lg:flex-row lg:gap-17 gap-8 justify-center mt-10">
                <div className="flex justify-center flex-col items-center">
                    <img src={excursion2} alt="" className="w-70 lg:w-80"/>
                    <PictureTitles title={'Excursion'} />
                </div>
                <div className="flex justify-center flex-col items-center">
                    <img src={hall} alt="" className="w-70 lg:w-130"/>
                    <PictureTitles title={'Hall'} />
                </div>
            </section>

            <section className="flex flex-col lg:flex-row justify-center items-center gap-8 mt-10 lg:mx-10 mx-10 mb-20">
                <div className="flex flex-col items-center">
                    <img src={library} alt="" className="w-100"/>
                    <PictureTitles title={'Library'} />
                </div>
                <div  className="flex flex-col items-center">
                    <img src={physics} alt="" className="w-70"/>
                    <PictureTitles title={'Physics Laboratory'} />
                </div>
                <div  className="flex flex-col items-center">
                    <img src={workshop} alt="" className="w-100
                    "/>
                    <PictureTitles title={'Workshop'} />
                </div>
            </section>

            <Footer />
        </>
    )
}