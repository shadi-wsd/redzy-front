import logo22 from "../../assets/images/redzy/logo2.svg";
import logo33 from "../../assets/images/redzy/logo3.svg";
import animated from "../../assets/images/redzy/amimated-world-01.svg";
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
    const naviagte = useNavigate();

    const navigateTo = (val) => {
        return naviagte(val);
    }
    return (
        <>
            <section className="app-main-section">
                <div className="app-inner-view">
                    <section className="welcome-page-section">
                        <div className="welcome-logo">
                            <img src={logo22} alt="logo2" draggable={false} />
                        </div>
                        <div className="welcome-details">
                            <img src={logo33} alt="logo" draggable={false} />
                            <p>Flexible work, at your fingertips, earn money your way</p>
                        </div>
                        <div className="welcome-page-animation">
                            <img src={animated} draggable={false} alt="animation" />
                        </div>
                        <div className="welcome-navigate-btns">
                            <button className="global-btn global-btn-primary" onClick={()=> navigateTo("/signup")}>Become a Tasker</button>
                            <button className="global-btn global-btn-secondary mt8" onClick={()=> navigateTo("/signin")}>Login Now</button>
                            <p className="note">By clicking login, I agree to TaskRabbit’s Terms and Policy. Learn how we process your data in our Privacy Policy and Cookie Policy.</p>
                        </div>
                    </section>
                </div>
            </section>
        </>
    )
}

export default WelcomePage;