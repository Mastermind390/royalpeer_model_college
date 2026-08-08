import HeaderNav from "../components/HeaderNav";
import hall from "../assets/videos/hall.mp4";

export default function FootagePage() {
    return (
        <>
            <HeaderNav />
            <div>
                <video src={hall}></video>
            </div>
        </>
    )
}