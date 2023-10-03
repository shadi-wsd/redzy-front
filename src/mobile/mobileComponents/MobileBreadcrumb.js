import { Link } from "react-router-dom";

const MobileBreadcrumb = ({ isLogout, name, nav }) => {
    return (
        <div className="section-breadcrumb">
            <div className="childs">
                <Link to={`${nav}`}>
                    <i className="fa fa-angle-left"></i>
                </Link>
            </div>
            <div className="childs">
                <h3>{name}</h3>
            </div>
            <div className="childs">
                {
                    isLogout
                        ?
                        <div className="logout-btn">
                            <i className="fa fa-sign-in-alt"></i>
                        </div>
                        :
                        <></>
                }
            </div>
        </div>
    )
}

export default MobileBreadcrumb;