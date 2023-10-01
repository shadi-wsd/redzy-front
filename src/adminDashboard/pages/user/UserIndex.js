import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../Breadcrumb";
import { useDispatch, useSelector } from "react-redux";
import { clearError, fetchUsers, getUserByRole, searchUser } from "../../../states/actions/userAction";
import Loader from "../../../components/loader/Loader";
import moment from "moment";
import { useAlert } from "react-alert";

const UserIndex = () => {
    const dispatch = useDispatch();
    const alert = useAlert();

    const { allUsers, loading, error } = useSelector(state => state.allUsers);

    const [searchQuery, setSearchQuery] = useState("");
    let [orientationVal, setOrientationVal] = useState(-1);
    let [userRole, setUserRole] = useState("");

    let [perPage, setPerPage] = useState(15);
    let [pageNumber, setPageNumber] = useState(1);

    const resetAll = () => {
        return dispatch(fetchUsers(perPage = 15, pageNumber = 1, orientationVal = -1));
    }

    const pageManager = (type) => {
        if (type === "increase") {
            setPageNumber((pageNumber) => pageNumber + 1);
        }
        if (type === "decrease") {
            setPageNumber((pageNumber) => pageNumber - 1);
        }
    }

    const copyToClipboard = (val) => {
        navigator.clipboard.writeText(val);
        return alert.success("Reference code is copied!");
    }

    const searchHandler = () => {
        if (searchQuery === "") {
            return alert.error("Please provide search query!");
        }
        return dispatch(searchUser(searchQuery));
    }

    const filterByRoleHandler = (val) => {
        setUserRole(val);

        if (val === "all") {
            return resetAll();
        }

        return dispatch(getUserByRole(val));
    }

    useEffect(() => {
        dispatch(fetchUsers(perPage, pageNumber, orientationVal));

        if (error) {
            alert.error(error);
            dispatch(clearError());
        }
    }, [dispatch, perPage, pageNumber, orientationVal, error, alert])
    return (
        <>
            {loading ? <Loader /> : <></>}
            <Breadcrumb
                icon="fa fa-users"
                heading="Manage Users"
                subheading="You can manage users"
                isButtons={true}
            />
            <div className="dashboard-content">
                <div className="d-tables">
                    <div className="dashboard-filter">
                        <div className="dashboard-filter-parent">
                            <div className="dashboard-filter-childs">
                                <form onSubmit={(e) => e.preventDefault(e)}></form>
                                <input
                                    name="searchQuery"
                                    value={searchQuery}
                                    type="text"
                                    placeholder="Search...."
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                                <button type="submit" onClick={() => searchHandler()}>Search <i className="fa fa-search"></i></button>
                            </div>
                            <div className="dashboard-filter-childs">
                                <p>User Role <i className="fa fa-arrow-right"></i></p>
                                <select
                                    name="userRole"
                                    value={userRole}
                                    onChange={(e) => filterByRoleHandler(e.target.value)}
                                >
                                    <option value="all">All</option>
                                    <option value="User">User</option>
                                    <option value="Admin">Admin</option>
                                    <option value="Super-Admin">Super Admin</option>
                                </select>
                            </div>
                            <div className="dashboard-filter-childs">
                                <p>Orientation <i className="fa fa-arrow-right"></i></p>
                                <select
                                    name="orientationVal"
                                    value={orientationVal}
                                    onChange={(e) => setOrientationVal(e.target.value)}
                                >
                                    <option value="1">Old To New</option>
                                    <option value="-1" selected>New To Old</option>
                                </select>
                            </div>
                            <div className="dashboard-filter-childs">
                                <button className="reset-btn" onClick={() => resetAll()}>RESET ALL</button>
                            </div>
                        </div>
                    </div>
                    <div className="d-card">
                        <div className="d-card-header d-card-header-bg-color d-card-heading-font card-header-padding">
                            <div className="data-table-parent">
                                <div className="data-table-inner">
                                    <p>USERS LIST</p>
                                    <h3>Users</h3>
                                </div>
                                <div className="data-table-inner">
                                    <Link to="/dashboard/createPracticeAcc" className="create-new-account"><li>Create Practice Account <i className="fa fa-plus"></i></li></Link>
                                    <Link to="/dashboard/createUser"><li>Add User <i className="fa fa-angle-right"></i></li></Link>
                                </div>
                            </div>
                        </div>
                        <div className="d-card-body card-body-padding d-card-body-bg-color">
                            <table>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Profile</th>
                                        <th>Ref No.</th>
                                        <th>Username</th>
                                        <th>Phone</th>
                                        <th>Account Level</th>
                                        <th>Role</th>
                                        <th>Stage</th>
                                        <th>Balance</th>
                                        <th>Joined Date</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        allUsers && allUsers.map((data, index) => (
                                            <tr key={index}>
                                                <th scope="row">{index + 1}</th>
                                                <td className="table-profile-picture">
                                                    <div className="table-profile-picture-text-wrapper">
                                                        <h3>{data.username[0].toUpperCase()}</h3>
                                                    </div>
                                                </td>
                                                <td className="ref_id">
                                                    {data.adminCode}<i className="fa fa-copy" onClick={() => copyToClipboard(data.adminCode)}></i>

                                                </td>
                                                <td>{data.username}</td>
                                                <td>{data.phone === undefined ? "NULL" : data.phone}</td>
                                                <td>{data.role === "User" || data.role === "Practice" ? data?.accountLevel?.level : "-"}</td>
                                                <td>
                                                    <p className={
                                                        data.role === "User" ? "user-only role-wise " : "role-wise"
                                                            &&
                                                            data.role === "Admin" ? "admin-only role-wise " : "role-wise"
                                                                &&
                                                                data.role === "Super-Admin" ? "super-admin-only role-wise " : "role-wise"
                                                                    &&
                                                                    data.role === "Practice" ? "practice-only role-wise " : "role-wise"
                                                    }>{data.role}
                                                    </p>
                                                </td>
                                                <td>{data?.currentJourney?.currentStage}</td>
                                              
                                              
                                                <td className={data?.walletId?.value < 0 ? "identidy-negative":""}>{data.role === "User" || data.role === "Practice"  ? "$ " + data?.walletId?.value : "$ 0"}</td>
                                                <td>{moment(data && data.createdAt).format("Do MMM YYYY")}</td>
                                                <td className="table-action">
                                                    <ul>
                                                        {
                                                            data.role === "User" || data.role === "Practice"
                                                                ?
                                                                <>
                                                                    <Link to={`/dashboard/viewUserDetails/${data._id}`}>
                                                                        <li><i className="fa fa-eye"></i></li>
                                                                    </Link>
                                                                    <Link to={`/dashboard/updateUser/${data._id}`}>
                                                                        <li><i className="fa fa-pen"></i></li>
                                                                    </Link>
                                                                    <Link to={`/dashboard/userJourney/${data._id}`}>
                                                                        <li><i className="fa fa-paper-plane"></i></li>
                                                                    </Link>
                                                                    <Link to={`/dashboard/createJourney/${data._id}/${data.username}`}>
                                                                        <p className="set-journey">Set Journey</p>
                                                                    </Link>
                                                                </>
                                                                :
                                                                <>
                                                                    <div className="admin-action-symbol">
                                                                        <p>ADMIN</p>
                                                                    </div>
                                                                </>

                                                        }
                                                    </ul>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                            <div className="table-pagination">
                                <div className="pagination-childs"></div>
                                <div className="pagination-childs">
                                    <div className="show-pagination-page item-per-page">
                                        <h3>Per Page</h3>
                                        <select
                                            name="perPage"
                                            value={perPage}
                                            onChange={(e) => setPerPage(e.target.value)}
                                        >
                                            <option value="2">2</option>
                                            <option value="5">5</option>
                                            <option value="10">10</option>
                                            <option value="15">15</option>
                                            <option value="20">20</option>
                                            <option value="50">50</option>
                                            <option value="100">100</option>
                                            <option value="500">500</option>
                                        </select>
                                    </div>
                                    <div className="show-pagination-page">
                                        <p>Page - {pageNumber}</p>
                                    </div>
                                    <div className="show-pagination-page">
                                        <li onClick={() => pageManager("decrease")}><i className="fa fa-angle-left"></i></li>
                                        <li onClick={() => pageManager("increase")}><i className="fa fa-angle-right"></i></li>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserIndex;