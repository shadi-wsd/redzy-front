import "../assets/styles/mobile.scss";
import { Route, Routes } from "react-router-dom";
import UserProfile from "./mobilePages/UserProfile";
import UserJourney from "./mobilePages/UserJourney";

const UserLanding = () => {
    return (
        <>
            <section className="app-main-section">
                <div className="app-inner-view">
                    <Routes>
                        <Route path="/userProfile" element={<UserProfile />} exact />
                        <Route path="/userJourney" element={<UserJourney />} exact />
                    </Routes>
                </div>
            </section>
        </>
    )
}

export default UserLanding;