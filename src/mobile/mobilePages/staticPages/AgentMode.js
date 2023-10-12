import MobileBreadcrumb from "../../mobileComponents/MobileBreadcrumb";

const AgentMode = () => {
    return (
        <>
            <section className="rules-section mobile-section-padding background_texture">
                <MobileBreadcrumb name="AGENT MODE" nav="/userDashboard/userProfile" isLogout={false} />
                <ul className="static-text-info">
                    <li>
                        Platform users can invite others to become agents of the platform through the invitation code and become your downline, as the upline you can take a percentage of your downline's reward, the reward earned by the upline will be directly returned to the upline's platform account, or team report.
                    </li>
                    <li>
                        Our agents receive 30% of the reward of their subordinates
                    </li>
                    <li>
                        Notes: All agents/downlines of the platform will receive a certain percentage of rewards from the platform accordingly, and developing a team does not affect the rewards of any agent/downline.
                    </li>
                </ul>
            </section>
        </>
    )
}

export default AgentMode;