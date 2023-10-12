import MobileBreadcrumb from "../../mobileComponents/MobileBreadcrumb";

const Rules = () => {
    return (
        <>
            <section className="rules-section mobile-section-padding background_texture">
                <MobileBreadcrumb name="RULES DESCRIPTION" nav="/userDashboard/userProfile" isLogout={false} />
                <ul className="static-text-info">
                    <li>
                        1. All Bonus Tour Package must be completed before withdrawing or resetting your account.
                    </li>
                    <li>
                        2. Only one account can be registered per phone number.
                    </li>
                    <li>
                        3. Please do not re-bind the same wallet address to different account to reserve bookings. We will freeze the following accounts if found.
                    </li>
                    <li>
                        4. Please do not disclose your account password and withdrawal password to others. Our platform will not be held responsible for any losses caused.
                    </li>
                    <li>
                        5. All Bonus Tour Package are randomly allocated by the system and once the reservation deal has been accepted and allocated by the system, any changes, cancellations or abandonment of reservation are strictly not allowed. There will be 1-3 negatives in every bonus deal, maximum 3 set of Bonus Tour Package in 35 bookings.
                    </li>
                    <li>
                        6. Legal action will be taken in the event of inappropriate use of the account.
                    </li>
                    <li>
                        7. Kindly confirm the deposit address with customer service before transferring funds.
                    </li>
                    <li>
                        8. If the deposit is made to the wrong deposit address, the platform will not take any responsibility.
                    </li>
                    <li>
                        9. A balance of less than 50$ is not allowed to start reservation deal, members should ensure that they have a balance of 50$ before starting a reservation deal.
                    </li>
                    <li>
                        10. Once member has started a reservation deal, it must be completed within one day, if it cannot be completed within one day, please inform customer service as soon as possible.
                    </li>
                    <li>
                        11. Bank withdraw is only available for Diamond member or above.
                    </li>
                    <li>
                        Dear member, kindly read carefully for our Rules Description, thank you for your cooperation.
                    </li>
                    <li>
                        Copyright © 2023 Task Rabbit. All Rights Reserved.
                    </li>
                </ul>
            </section>
        </>
    )
}

export default Rules;