import "../assets/styles/mobile.scss";
import { Route, Routes } from "react-router-dom";
import WelcomePage from "./userAuth/WelcomePage"

const UserLanding = () => {
    return (
        <>
            <section className="app-main-section">
                <div className="app-inner-view">
                    <Routes>
                        <Route path="/" element={<WelcomePage />} exact />
                    </Routes>
                </div>
            </section>
        </>
    )
}

export default UserLanding;