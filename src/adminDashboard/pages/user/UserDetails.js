import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import moment from "moment";
import { useAlert } from "react-alert";
import Loader from "../../../components/loader/Loader";
import { fetchUserDetails, resetDetail } from "../../../states/actions/userAction";
import { chargeWallet, getUserWalletById, resetNew } from "../../../states/actions/walletAction";

const UserDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const alert = useAlert();
    const navigate = useNavigate();

    const { loading, user, error } = useSelector(state => state.userDetails);
    const { loading: walletLoading, userWallet, error: walletError } = useSelector(state => state.userWalletById);
    const { loading: chargeLoading, message: rechargeMessage, error: chargeError, success: rechargeSuccess } = useSelector(state => state.chargedWallet);

    const [walletVal, setWalletVal] = useState({
        clientId: "",
        walletId: "",
        chargeValue: ""
    });

    const [processType, setProcessType] = useState("Charging");


    const onChangeHandler = (e) => {
        setWalletVal({ ...walletVal, [e.target.name]: e.target.value });
    }

    const submitHandler = () => {
        if (!walletVal.chargeValue) {
            return alert.error("Please enter amount!");
        }

        dispatch(chargeWallet(walletVal.clientId, walletVal.walletId, walletVal.chargeValue, processType));
    }

    useEffect(() => {

        if (user && user?._id !== id) {
            dispatch(fetchUserDetails(id));
            dispatch(getUserWalletById(id));
        } else {
            setWalletVal({
                clientId: userWallet.clientId,
                walletId: userWallet._id,
                chargeValue: ""
            });
        }

        if (walletError) {
            alert.error(walletError);
        }
        if (error) {
            alert.error(walletError);
        }
        if (chargeError) {
            alert.error(chargeError);
        }
        if (rechargeSuccess) {
            alert.success(rechargeMessage);
            dispatch(resetNew());
            dispatch(resetDetail());
            navigate("/dashboard/users");
        }
    }, [
        dispatch,
        navigate,
        id,
        walletError,
        error,
        alert,
        userWallet._id,
        userWallet.clientId,
        user,
        chargeError,
        rechargeMessage,
        rechargeSuccess
    ]);
    return (
        <>
            {loading || walletLoading || chargeLoading ? <Loader /> : <></>}
            <div className="opoup_overlay"></div>
            <div className="dashboard-content pop-up-box">
                <div className="dashboard-details-page-parent">
                    <div className="dashboard-detail-page">
                        <div className="dahboard-detail-wrapper">
                            <div className="dashboard-detail-profile-wrapper">
                                <h3><i className="fa fa-user"></i></h3>
                            </div>
                            <h1>{user.username === undefined ? "NULL" : user.username}</h1>
                            <h1>{user.role === undefined ? "NULL" : user.role}</h1>
                            <div className="dashboard-profile-details">
                                <p><span>User ID :</span>{user._id === undefined ? "NULL" : user._id}</p>
                                <p><span>Username :</span>{user.username === undefined ? "NULL" : user.username}</p>
                                <p><span>Email :</span>{user.email === undefined ? "NULL" : user.email}</p>
                                <p><span>Phone :</span>{user.phone === undefined ? "NULL" : user.phone}</p>
                                <p><span>Status :</span>{user.status === undefined ? "NULL" : user.status}</p>
                                <p><span>Account Level :</span>{user.accountLevel && user.accountLevel.level}</p>
                                <p><span>Created At :</span>{user.createdAt === undefined ? "NULL" : moment(user.createdAt).format("Do MMM YYYY")}</p>
                                <p><span>Updated At :</span>{user.updatedAt === undefined ? "NULL" : moment(user.updatedAt).format("Do MMM YYYY")}</p>
                            </div>
                            <div className="available-balance">
                                <h3>$ {userWallet && userWallet.value}</h3>
                                <p>Available Balance</p>
                            </div>
                            <div className="back-btn">
                                <Link to="/dashboard/users"><i className="fa fa-angle-left"></i> Back</Link>
                            </div>
                        </div>
                    </div>
                    <div className="dashboard-detail-page">
                        <div className="dashboard-global-form">
                            <form onSubmit={(e) => e.preventDefault()}>
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="detail-page-heading">
                                            <h3>Recharge User Wallet</h3>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="dashboard-global-form-group">
                                                <label>Client ID <span>*</span></label>
                                                <input
                                                    type="password"
                                                    placeholder="Enter username"
                                                    name="clientId"
                                                    value={walletVal.clientId}
                                                    readOnly
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="dashboard-global-form-group">
                                                <label>Wallet ID <span>*</span></label>
                                                <input
                                                    type="password"
                                                    placeholder="Enter password"
                                                    name="walletId"
                                                    value={walletVal.walletId}
                                                    readOnly
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="dashboard-global-form-group">
                                                <label>Amount <span>*</span></label>
                                                <input
                                                    type="number"
                                                    placeholder="Enter amount"
                                                    name="chargeValue"
                                                    value={walletVal.chargeValue}
                                                    onChange={(e) => onChangeHandler(e)}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="dashboard-global-form-group charge-group">
                                                <div className="charge-wrapper">
                                                    <input
                                                        type="radio"
                                                        value="Charging"
                                                        checked={processType === 'Charging'}
                                                        onChange={(e)=> setProcessType(e.target.value)}
                                                    />
                                                    <p>Deposite</p>
                                                </div>
                                                <div className="charge-wrapper">
                                                    <input
                                                        type="radio"
                                                        value="Withdrawal-By-Admin"
                                                        checked={processType === 'Withdrawal-By-Admin'}
                                                        onChange={(e)=> setProcessType(e.target.value)}
                                                    />
                                                    <p>Withdraw</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="dashboard-form-action">
                                                <button className="create-btn" onClick={() => submitHandler()}>Proceed</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserDetails; 