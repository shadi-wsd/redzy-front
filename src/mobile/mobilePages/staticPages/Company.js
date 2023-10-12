import MobileBreadcrumb from "../../mobileComponents/MobileBreadcrumb";

const Company = () => {
    return (
        <>
            <section className="rules-section mobile-section-padding background_texture">
                <MobileBreadcrumb name="COMPANY INTRODUCTION" nav="/userDashboard/userProfile" isLogout={false} />
                <ul className="static-text-info">
                    <li>
                        At SevenTravel, we know that the planning and booking of your holiday can be one of the most enjoyable aspects of your tailor-made holiday, but we are also aware that with the current changes in regulations and government advice, that this can be quite difficult to understand and therefore discouraging.
                    </li>
                    <li>
                        We are ATBA and ATOL bonded, this means that your money with us is securely protected. In the unlikely event of you wishing to cancel your holiday with us, or if we must cancel due to unforeseen circumstances, we’ve detailed below how you’ll be financially impacted.
                    </li>
                    <li>
                        You will be entitled to a full refund of all monies paid, including your deposit if one of the following are in place:
                    </li>
                    <li>
                        The current Foreign, Commonwealth and Development office advice does not permit you to travel to the country of your choice. Travel to this country will invalidate most travel insurances.
                    </li>
                    <li>
                        Upon arrival back into the UK, you will be placed into mandatory hotel quarantine due to the country, which you have just visited.
                    </li>
                    <li>
                        We are aware that sometimes in a post Covid-19 travel environment, you maybe are apprehensive about your holiday planning and if you will be able to travel to the country of your choice. We understand how important flexible travel booking rules so we offer the opportunity to transfer your deposit for free ahead your full balance being paid, or you may postpone your holiday at any point before your full balance is due. This may incur additional increases in the total holiday cost due to individual partner conditions and you will be advised of these.
                    </li>
                    <li>
                        If you choose to cancel your trip, then cancellation charges will apply. Your Travel Designer will advise on the cost implication of cancelling your holiday. As a result, we encourage our clients to postpone their travel instead of cancelling. We advise that you ensure you have adequate travel insurance to cover you in the eventuality, that you may need to cancel. Further information on our booking policies, please visit our booking terms.
                    </li>
                </ul>
            </section>
        </>
    )
}

export default Company;