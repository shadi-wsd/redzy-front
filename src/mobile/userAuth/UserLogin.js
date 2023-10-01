import { useNavigate } from "react-router-dom";

const UserLogin = () => {
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
                            <h3><span className="active" onClick={() => sendTo("/signin")}>LOGIN</span><span className="separate">|</span><span onClick={() => sendTo("/signup")}>SIGN UP</span></h3>
                        </div>
                        <div className="mobile-form">
                            <form>
                                <div className="mobile-form-group">
                                    <i className="fa fa-user"></i>
                                    <input
                                        type="text"
                                        placeholder="Username/Phone Number"
                                    />
                                </div>
                                <div className="mobile-form-group">
                                    <i className="fa fa-lock"></i>
                                    <input
                                        type="text"
                                        placeholder="Login Password"
                                    />
                                </div>
                                <div className="auth-submit-btns">
                                    <button className="global-btn global-btn-primary">SIGN IN</button>
                                    <p className="note">By clicking login, I agree to TaskRabbit’s Terms and Policy. Learn how we process your data in our Privacy Policy and Cookie Policy.</p>
                                </div>
                            </form>
                        </div>
                    </section>
                </div>
            </section>
        </>
    )
}

export default UserLogin;