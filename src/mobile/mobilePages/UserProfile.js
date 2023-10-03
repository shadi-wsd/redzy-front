import profile from "../../assets/images/redzy/profile.png";
import BottomNav from "../mobileComponents/BottomNav";
import MobileBreadcrumb from "../mobileComponents/MobileBreadcrumb";

const UserProfile = () => {
    return (
        <>
            <section className="user-profile-section mobile-section-padding background_texture">
                <MobileBreadcrumb name="Profile" nav="/" isLogout={true}/>
                <div className="user-profile-details">
                    <div className="user-profile-details-parent">
                        <div className="user-profile-details-childs">
                            <img src={profile} alt="profile" draggable={false} />
                        </div>
                        <div className="user-profile-details-childs">
                            <h3 className="sub-heading">PRO USER</h3>
                            <h3 className="heading mt2">Jhon Doe</h3>
                            <div className="user-profile-inner-details mt-4">
                                <div className="user-profile-inner-details-childs">
                                    <h2 className="sub-heading">Invitation Code</h2>
                                    <p className="heading mt2">7ME2NC <i className="fa fa-file-alt copy-btn ml2"></i></p>
                                </div>
                                <div className="user-profile-inner-details-childs">
                                    <h2 className="sub-heading">Commission</h2>
                                    <p className="heading mt2">$251.19</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="profile-line-break"></div>
                    <div className="user-account-balance">
                        <h3>Account Balance</h3>
                        <h2><span className="mr8">$</span>3189.11</h2>
                    </div>
                </div>

                <div className="user-profile-subnav">
                    <h3 className="heading-lg">More Options</h3>
                    <ul>
                        <li>
                            <h2>Wallet Info</h2>
                            <i className="fa fa-angle-right"></i>
                        </li>
                        <li>
                            <h2>Reward</h2>
                            <i className="fa fa-angle-right"></i>
                        </li>
                        <li>
                            <h2>Rules</h2>
                            <i className="fa fa-angle-right"></i>
                        </li>
                        <li>
                            <h2>Agent Mode</h2>
                            <i className="fa fa-angle-right"></i>
                        </li>
                        <li>
                            <h2>FAQs</h2>
                            <i className="fa fa-angle-right"></i>
                        </li>
                        <li>
                            <h2>About</h2>
                            <i className="fa fa-angle-right"></i>
                        </li>
                    </ul>
                </div>
            </section>
            <BottomNav />
        </>
    )
}

export default UserProfile;