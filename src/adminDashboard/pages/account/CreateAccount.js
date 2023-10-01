import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "../../../components/loader/Loader";
import Breadcrumb from "../../Breadcrumb";
import { clearError, createPracticeAccount, resetNew } from "../../../states/actions/userAction";

const CreateAccount = () => {
    const alert = useAlert();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { loading, error, success, message } = useSelector(state => state.practiceAccount);

    const [accVal, setAccVal] = useState({
        username: "",
        password: "",
        cpassword: "",
        mainAccount: ""
    });

    const onChangeHandler = (e) => {
        setAccVal({ ...accVal, [e.target.name]: e.target.value });
    }

    const submitHandler = () => {
        if (!accVal.username || !accVal.password || !accVal.cpassword || !accVal.mainAccount) {
            return alert.error("Required field is missing!");
        }

        if (accVal.password !== accVal.cpassword) {
            return alert.error("Password is not matching!");
        }

        dispatch(createPracticeAccount(accVal.username, accVal.mainAccount, accVal.password));
    }

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearError());
        }
        if (success) {
            alert.success(message);
            dispatch(resetNew());
            navigate("/dashboard/users");
        }
    }, [
        dispatch,
        navigate,
        alert,
        error,
        success,
        message
    ]);
    return (
        <>
            {loading ? <Loader /> : <></>}
            <Breadcrumb
                icon="fa fa-plus"
                heading="Create Practice Account"
                subheading="Create practice account"
                isButtons={false}
            />
            <div className="dashboard-content">
                <div className="dashboard-global-form">
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="form-back-btn">
                                    <Link to="/dashboard/users"><i className="fa fa-angle-left"></i>Back</Link>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="dashboard-global-form-group">
                                        <label>Username <span>*</span></label>
                                        <input
                                            type="text"
                                            placeholder="Enter product name"
                                            name="username"
                                            value={accVal.username}
                                            onChange={(e) => onChangeHandler(e)}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="dashboard-global-form-group">
                                        <label>Main Account <span>*</span></label>
                                        <input
                                            type="text"
                                            placeholder="Enter main account"
                                            name="mainAccount"
                                            value={accVal.mainAccount}
                                            onChange={(e) => onChangeHandler(e)}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="dashboard-global-form-group">
                                        <label>Password <span>*</span></label>
                                        <input
                                            type="text"
                                            placeholder="Enter your password"
                                            name="password"
                                            value={accVal.password}
                                            onChange={(e) => onChangeHandler(e)}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="dashboard-global-form-group">
                                        <label>Confirm Password <span>*</span></label>
                                        <input
                                            type="text"
                                            placeholder="Enter your password again"
                                            name="cpassword"
                                            value={accVal.cpassword}
                                            onChange={(e) => onChangeHandler(e)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="dashboard-form-action">
                                        <button className="create-btn" onClick={() => submitHandler()}>Create Account</button>
                                    </div>
                                </div>
                            </div>
                            <div className="form-notes">
                                <ul>
                                    <li>Please note that the field containing "*" icon is required!</li>
                                </ul>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default CreateAccount;