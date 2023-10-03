import logo from "../../assets/images/redzy/logo2.svg";

const BottomNav = () => {
    return(
        <>
            <div className="bottom_nav">
                <div className="bottom_nav_childs">
                    <i className="fa fa-home"></i>
                </div>
                <div className="bottom_nav_childs">
                    <i className="fa fa-suitcase"></i>
                </div>
                <div className="bottom_nav_childs">
                   <div className="bottom_nav_logo">
                        <img src={logo} alt="logo2" draggable={false} />
                   </div>
                </div>
                <div className="bottom_nav_childs">
                    <i className="fa fa-wallet"></i>
                </div>
                <div className="bottom_nav_childs">
                    <i className="fa fa-cog"></i>
                </div>
            </div>
        </>
    )
}

export default BottomNav;                          