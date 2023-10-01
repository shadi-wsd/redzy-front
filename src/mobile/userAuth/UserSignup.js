import { useNavigate } from "react-router-dom";


const UserSignup = () => {

    const navigate = useNavigate();

    const sendTo = (val) => {
        return navigate(val);
    }
    return (
        <>
            <section className="app-main-section">
                <div className="app-inner-view">
                    <section className="mobile-auth-section">
                        <div className="task_name">
                            <h1>task</h1>
                        </div>
                        <div className="tab-wrapper">
                            <h3><span onClick={() => sendTo("/signin")}>LOGIN</span><span className="separate">|</span><span className="active" onClick={() => sendTo("/signup")}>SIGN UP</span></h3>
                        </div>
                        <div className="mobile-form">
                            <form>
                                <div className="mobile-form-group">
                                    <i className="fa fa-mobile"></i>
                                    <input
                                        type="text"
                                        placeholder="Phone Number"
                                    />
                                </div>
                                <div className="mobile-form-group">
                                    <i className="fa fa-user"></i>
                                    <input
                                        type="text"
                                        placeholder="Username"
                                    />
                                </div>
                                <div className="mobile-form-group">
                                    <i className="fa fa-lock"></i>
                                    <input
                                        type="text"
                                        placeholder="Login Password"
                                    />
                                </div>
                                <div className="mobile-form-group">
                                    <i className="fa fa-lock"></i>
                                    <input
                                        type="text"
                                        placeholder="Withdrawal Password"
                                    />
                                </div>
                                <div className="mobile-form-group">
                                    <i className="fa fa-robot"></i>
                                    <input
                                        type="text"
                                        placeholder="Invitation Code"
                                    />
                                </div>
                                <div className="auth-submit-btns">
                                    <button className="global-btn global-btn-primary">REGISTER NOW</button>
                                </div>
                            </form>
                        </div>
                    </section>
                </div>
            </section>
        </>
    )
}

export default UserSignup;