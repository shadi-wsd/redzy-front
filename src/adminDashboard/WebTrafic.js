import AreaRoomAdmin from "./dashboardComponents/AreaRoomAdmin";

const WebTrafic = () => {
    return (
        <>
            <div className="webtrafic-wrapper">
                <div className="webtrafic-parents">
                    <div className="webtrafic-childs">
                        <div className="show-recent-users">
                            <div className="d-card">
                                <div className="d-card-header card-header-padding d-card-heading-font">
                                    <div className="d-card-recently-join-users">
                                        <p>PROGRESS</p>
                                        <h3>Recent Users</h3>
                                    </div>
                                    <div className="d-card-recently-join-users">
                                        <button className="d-btn-transparent-disable">RECENTLY</button>
                                    </div>
                                </div>
                                <div className="d-card-body card-body-padding d-card-body-bg-color">
                                    <ul>
                                        <li>
                                            <div className="useranalytic-profile-picture">
                                                <div className="useranalytic-profile-picture-inner">
                                                    <img src="https://tokyo-black-nextjs-js.bloomui.com/static/images/avatars/1.jpg" alt="useranalytics" />
                                                </div>
                                                <div className="useranalytic-profile-picture-inner">
                                                    <h2>Munroe Dacks</h2>
                                                    <p>Senior Cost Accountant at</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="card-action-btn">
                                                <span className="recent-user-date">30 Aug 2023 - 3:35PM</span>
                                                <button className="d-btn-outline-sm">View</button>
                                            </div>
                                        </li>
                                    </ul>
                                    <ul>
                                        <li>
                                            <div className="useranalytic-profile-picture">
                                                <div className="useranalytic-profile-picture-inner">
                                                    <img src="https://tokyo-black-nextjs-js.bloomui.com/static/images/avatars/2.jpg" alt="useranalytics" />
                                                </div>
                                                <div className="useranalytic-profile-picture-inner">
                                                    <h2>Munroe Dacks</h2>
                                                    <p>Senior Cost Accountant at</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="card-action-btn">
                                                <span className="recent-user-date">28 Aug 2023 - 3:35PM</span>
                                                <button className="d-btn-outline-sm">View</button>
                                            </div>
                                        </li>
                                    </ul>
                                    <ul>
                                        <li>
                                            <div className="useranalytic-profile-picture">
                                                <div className="useranalytic-profile-picture-inner">
                                                    <img src="https://tokyo-black-nextjs-js.bloomui.com/static/images/avatars/3.jpg" alt="useranalytics" />
                                                </div>
                                                <div className="useranalytic-profile-picture-inner">
                                                    <h2>Munroe Dacks</h2>
                                                    <p>Senior Cost Accountant at</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="card-action-btn">
                                                <span className="recent-user-date">25 Aug 2023 - 3:35PM</span>
                                                <button className="d-btn-outline-sm">View</button>
                                            </div>
                                        </li>
                                    </ul>
                                    <ul>
                                        <li>
                                            <div className="useranalytic-profile-picture">
                                                <div className="useranalytic-profile-picture-inner">
                                                    <img src="https://tokyo-black-nextjs-js.bloomui.com/static/images/avatars/4.jpg" alt="useranalytics" />
                                                </div>
                                                <div className="useranalytic-profile-picture-inner">
                                                    <h2>Munroe Dacks</h2>
                                                    <p>Senior Cost Accountant at</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="card-action-btn">
                                                <span className="recent-user-date">22 Aug 2023 - 9:00PM</span>
                                                <button className="d-btn-outline-sm">View</button>
                                            </div>
                                        </li>
                                    </ul>
                                    <ul>
                                        <li>
                                            <div className="useranalytic-profile-picture">
                                                <div className="useranalytic-profile-picture-inner">
                                                    <img src="https://tokyo-black-nextjs-js.bloomui.com/static/images/avatars/5.jpg" alt="useranalytics" />
                                                </div>
                                                <div className="useranalytic-profile-picture-inner">
                                                    <h2>Munroe Dacks</h2>
                                                    <p>Senior Cost Accountant at</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="card-action-btn">
                                            <span className="recent-user-date">21 Aug 2023 - 4:35PM</span>
                                                <button className="d-btn-outline-sm">View</button>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="webtrafic-childs">
                        <AreaRoomAdmin />
                    </div>
                </div>
            </div>
        </>
    )
}

export default WebTrafic;