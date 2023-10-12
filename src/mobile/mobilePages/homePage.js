import { useNavigate } from "react-router-dom";
import speaker from "../../assets/images/redzy/speaker.png"
import landingSlider1 from "../../assets/images/redzy/banner1.png"
import landingSlider2 from "../../assets/images/redzy/banner1.png"
import landingSlider3 from "../../assets/images/redzy/banner1.png"
import BottomNav from "../mobileComponents/BottomNav";
import logo from "../../assets/images/redzy/logo.svg"
import { motion } from "framer-motion"
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
const UserHome = () => {

    const navigate = useNavigate();

    const sendTo = (val) => {
        return navigate(val);
    }

    const [width, setWidth] = useState(0);
    const carousel = useRef()

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }, [])
    return (
        <>
            <section className="home-page-section background_texture">
                <div className="home-slider-container">
                    <div className="head-bar">
                        <div className="logo">
                            <img className="main-logo" src={logo} alt="main logo" />
                        </div>
                        <div className="profileLogo" onClick={() => sendTo("/userDashboard/userProfile")}>
                            <i class="fa fa-user"></i>
                        </div>
                    </div>
                    <div className="banner">
                        <div className="home-main-text">
                            <h2>Everyday life made easier</h2>
                        </div>
                        <span className="home-secound-text">Let’s explore together</span>
                    </div>
                    <div className="split">
                        <div>
                            <img src={speaker} alt="speaker" />
                        </div>
                    </div>
                    <motion.div ref={carousel} className="carousel" whileTap={{ cursor: "grabbing" }}>
                        <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} className="home-images-slider">
                            <div>
                                <img src={landingSlider1} alt="firs" />
                            </div>
                            <div>
                                <img src={landingSlider2} alt="secound" />
                            </div>
                            <div>
                                <img src={landingSlider3} alt="third" />
                            </div>

                        </motion.div>
                    </motion.div>

                </div>
                <BottomNav />
            </section>

        </>
    )
}

export default UserHome;