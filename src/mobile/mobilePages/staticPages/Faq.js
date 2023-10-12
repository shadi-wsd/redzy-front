import MobileBreadcrumb from "../../mobileComponents/MobileBreadcrumb";

const Faq = () => {
    return (
        <>
            <section className="rules-section mobile-section-padding background_texture">
                <MobileBreadcrumb name="FAQ" nav="/userDashboard/userProfile" isLogout={false} />
                <ul className="static-text-info">
                    <li>
                        ⚠️Notice : Please DO NOT bind the same wallet info for different accounts, if it is detected by the system the account ID will be frozen.⚠️
                    </li>
                    <li>
                        Personal multi-account accepting data will lead to the suspension of the merchant's store, affecting the merchant's credibility and the invalidation of sales data. The platform prohibits the same bank card bounded to multiple accounts, please DO NOT use individual multi-account, a card bound to multiple accounts, will all be lead to funds freeze up to 180 days or account permanently blocked for future processing! The platform is designed to prevent people from maliciously money laundering or cashing out a series of improper behavior.
                    </li>
                    <li>
                        Frequently asked questions (FAQ)
                    </li>
                    <li>
                        ↘️1. Recharge process <br />
                        To recharge, you only required to recharge within the home page. The followings steps is the recharge process:<br />
                        1) Click on the "Recharge" button <br />
                        2) transferred and click on the "Recharge" button to redirect to the online recharge customer service to assist in remittance recharge.<br />
                        3) After remitting the money according to the account provided by the platform's customer service, make sure to submit a screenshot of the successful transfer to the account. <br />

                        In order to ensure that the recharge is made quickly, please make sure that the name of the person and the amount you are transferring are the same as the one being provided. If you encounter any unsolvable problems during the recharge process, please contact the customer service recharge department in time. Due to the large amount of information, please make sure to confirm the account card number of this platform carefully before recharging. The platform occasionally changes the account number.

                        If you have any questions, please click the platform online customer service for consulting.
                    </li>
                    <li>
                        ↘️2. Reservation <br />
                        After completing your personal information. After you recharged your account, you may start reservation, click "Deal Now" to redirect to the relevant page to "Booking Now". Patiently wait for the system to book an order, submit the order once submission pop up to complete the tasks. Complete 35(Normal promoter) submissions per day to perform withdrawal.
                    </li>
                    <li>
                        ↘️3. Withdrawal <br />
                        Before making a withdrawal, please bind your withdrawal information in the APP. Before proceed, the withdrawal agents must complete the 35(Normal promoter) submissions requirement. During the working hours of the platform, you can withdraw your money in home page's "Withdrawal" interface. Click the "Withdrawal" button after entering the amount you want to withdraw and enter your withdraw password to withdraw. The specific arrival time is subject to the bank.
                    </li>
                    <li>
                        ↘️4.Platform agent mode <br />
                        Platform users can become platform agents by recommending new members, and they can get extra dynamic rewards. The reward is 30% of the daily commission for direct infrerior users.
                    </li>
                    <li>
                        ↘️5. Submission Time <br />
                        The platform operates from 10:00 to 22:00 daily and users can accept data during the platform's operating hours.
                    </li>
                    <li>
                        (Note: For any further clarification, please contact our online customer service.)
                    </li>
                </ul>
            </section>
        </>
    )
}

export default Faq;