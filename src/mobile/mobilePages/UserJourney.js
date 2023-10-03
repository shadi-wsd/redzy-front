import MobileBreadcrumb from "../mobileComponents/MobileBreadcrumb";
import profile from "../../assets/images/redzy/profile.png";
import logo from "../../assets/images/redzy/logo2.svg";
import BottomNav from "../mobileComponents/BottomNav";

const UserJourney = () => {
    return (
        <>
            <section className="user-journey-section mobile-section-padding background_texture">
                <MobileBreadcrumb name="Journey" nav="/" isLogout={false} />
                <div className="journey-wrapper">
                    <div className="journey-wrapper-childs">
                        <img src={profile} alt="pro" />
                    </div>
                    <div className="journey-wrapper-childs">
                        <h2 className="sub-heading">Accound Balance</h2>
                        <h1 className="heading mt4">USDT 8954.23</h1>
                    </div>
                </div>
                <div className="journey-info">
                    <div className="journey-info-childs">
                        <div className="earning-plan">
                            <h1><i className="fas fa-money-check mr8"></i>Earning Plan</h1>
                            <div className="user-journey-progress-bar">
                                <div className="progress-circle-wrapper">
                                    <div className="progress-circle-inner-wrapper">
                                        <h3>40%</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="progress-info">
                                <h3>10 Task</h3>
                                <p>of 35 task</p>
                            </div>
                        </div>
                    </div>
                    <div className="journey-info-childs">
                        <div className="journey-info-inner-childs">
                            <h3 className="sub-heading"><i className="fas fa-hand-holding-usd mr4"></i> Commission</h3>
                            <h1 className="heading-md mt4">USDT 325.75</h1>
                        </div>
                        <div className="journey-info-inner-childs">
                            <div className="journey-info-inner-childs-alt">
                                <p className="sub-heading">Today's</p>
                                <p className="sub-heading">Journey</p>
                                <h3 className="heading">35</h3>
                            </div>
                            <div className="journey-info-inner-childs-alt">
                                <p className="sub-heading">Journey</p>
                                <p className="sub-heading">Completed</p>
                                <h3 className="heading">5</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="journey-history-wrapper">
                    <h2 className="heading-lg">History</h2>
                    <ul>
                        <li>
                            <div className="journey-history-list">
                                <img src={logo} alt="logo" />
                            </div>
                            <div className="journey-history-list-title">
                                <p>Tours of Aswan High Dam</p>
                            </div>
                            <div className="journey-history-list-amount">
                                <h3><span className="mr8">$</span>3359.01</h3>
                            </div>
                        </li>
                        <li>
                            <div className="journey-history-list">
                                <img src={logo} alt="logo" />
                            </div>
                            <div className="journey-history-list-title">
                                <p>The Russian Tundra</p>
                            </div>
                            <div className="journey-history-list-amount">
                                <h3><span className="mr8">$</span>4456.01</h3>
                            </div>
                        </li>
                        <li>
                            <div className="journey-history-list">
                                <img src={logo} alt="logo" />
                            </div>
                            <div className="journey-history-list-title">
                                <p>Monaco Tours</p>
                            </div>
                            <div className="journey-history-list-amount">
                                <h3><span className="mr8">$</span>3359.01</h3>
                            </div>
                        </li>
                        <li>
                            <div className="journey-history-list">
                                <img src={logo} alt="logo" />
                            </div>
                            <div className="journey-history-list-title">
                                <p>Heritage building Taipei</p>
                            </div>
                            <div className="journey-history-list-amount">
                                <h3><span className="mr8">$</span>3359.01</h3>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="start-journey-btn">
                    <button className="global-btn global-btn-primary">Start Journey</button>
                </div>
            </section>
            <BottomNav />
        </>
    );
}

export default UserJourney;