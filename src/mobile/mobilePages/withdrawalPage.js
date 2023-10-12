import { useState } from "react";
import logo from "../../assets/images/redzy/logo.svg"
import historyLogo from "../../assets/images/redzy/historyLogo.png"
import BottomNav from "../mobileComponents/BottomNav";
import { Link } from "react-router-dom";

const UserWithdrawal = () => {

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const [selectedOption, setSelectedOption] = useState('TRC20');
    const [userVal, setUserVal] = useState({
        address: "",
        name: ""
    });

    const onChangeHandler = (e) => {
        setUserVal({ ...userVal, [e.target.name]: e.target.value });
    }

    return (
        <>
            <section className="user-withdrawal-section">
                <div className="backgroundImg">
                    <div className="withdrawal-page-header">
                        <Link to={`/`} className="backBtn">
                            <i className="fa fa-angle-left"></i>
                        </Link>
                        <span>
                            withdrawal
                        </span>
                        <a><img src={historyLogo} /></a>
                    </div>
                    <div className="pageDes">
                        <span>Last step to get your salary</span>
                    </div>

                </div>
                <div className="cards">
                    <div className="withdrawalLogo">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="withdrawalLogo">
                        <span>
                            USDT 5050.32
                        </span>
                    </div>

                    <div className="accountBalance">
                        <span>
                            Account Balance
                        </span>
                    </div>

                    <div className="withdrawalName">
                        <input
                            placeholder="NAME"
                        />
                    </div>
                    <div className="withdrawalName">
                        <input
                            placeholder="WALLET ADDRESS"
                            name="address"
                            value={userVal.address}
                            onChange={(e) => onChangeHandler(e)}
                        />
                    </div>
                    <div className="radio-button-container">
                        <label>
                            <input
                                type="radio"
                                value="TRC20"
                                checked={selectedOption === 'TRC20'}
                                onChange={handleOptionChange}
                            />
                            <span className="switch">TRC20</span>
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="ERC20"
                                checked={selectedOption === 'ERC20'}
                                onChange={handleOptionChange}
                            />

                            <span className="switch">ERC20</span>
                        </label>
                    </div>
                    <div className="withdrawalLogo usdtAmount">
                        <span>
                            USDT 0.00
                        </span>
                    </div>
                    <div className="withdrawalName withdrawalAmount">
                        <input placeholder="Withdrawal Amount" />
                    </div>
                    <div className="withdrawalLogo usdtAmount">
                        <span>
                            INPUT YOUR WITHDRAWAL PIN
                        </span>
                    </div>
                    <div className="withdrawalName withdrawalAmount">
                        <input placeholder="Withdrawal Password" />
                    </div>
                </div>
                <button class="withdrawalBtn">WITHDRAWAL</button>
                <div className="whyTastrabbitText">
                    <span>
                        Why Tastrabbit using CRYPTOCURRENCY?
                    </span>
                </div>

                <div className="answerWhyTastrabbitText">
                    <span>
                        Now you are assigning job to Taskrabbit Pro from all around the world USDT is the fastest and stable way to get paid oversea
                    </span>
                </div>
            </section>
            <BottomNav />
        </>
    )
}

export default UserWithdrawal;