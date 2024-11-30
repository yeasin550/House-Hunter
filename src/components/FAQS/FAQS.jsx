/* eslint-disable react/no-unknown-property */
import FAQSIMG from "../../assets/FAQS.png";

const FAQS = () => {
    return (
        <div className="py-14 px-8">

            <div className="mb-2 space-y-3">
                <p className="text-[#257EFD] font-bold">Get Your Answer</p>
                <h2 className="text-4xl font-bold ">Frequently Asked Questions</h2>
            </div>
            <div className="w-full mx-auto gap-10 py-12 flex flex-col-reverse md:flex-row items-center md:items-start mb-10">

                <div className="flex flex-col md:w-1/2 space-y-4" data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500">


                    <div className="mx-auto w-full">
                        <div className="divide-y divide-gray-100">
                            <details className="group bg-white px-4 p-1 mb-3">
                                <summary
                                    className="flex cursor-pointer list-none items-center justify-between p-4 text-lg font-medium text-secondary-900 group-open:text-primary-500 bg-gray-200 rounded-md">
                                    What is the step-by-step process for booking a house on your website?
                                    <div className="bg-white p-1 rounded-md">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="block h-5 w-5 group-open:hidden">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="hidden h-5 w-5 group-open:block">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                                        </svg>
                                    </div>
                                </summary>
                                <div className="pb-4 text-secondary-500">
                                    Booking a house is simple! Browse our listings, select the house you like, and choose your preferred check-in and check-out dates. Once selected, proceed to the booking page, fill in your details, and complete the payment process. You will receive a confirmation email with all the necessary details.</div>
                            </details>

                            <details className="group bg-white px-4 p-1 mb-3">
                                <summary
                                    className="flex cursor-pointer list-none items-center justify-between p-4 text-lg font-medium text-secondary-900 group-open:text-primary-500 bg-gray-200 rounded-md">
                                    What is your cancellation policy, and how can I request a refund if I need to cancel my booking?
                                    <div className="bg-white p-1 rounded-md">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="block h-5 w-5 group-open:hidden">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="hidden h-5 w-5 group-open:block">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                                        </svg>
                                    </div>
                                </summary>
                                <div className="pb-4 text-secondary-500">Our cancellation policy allows flexibility for our users. If you cancel within 48 hours of booking and at least 7 days before check-in, you will receive a full refund. For cancellations closer to the check-in date, partial refunds may apply. Please check each houses specific policy for details..</div>
                            </details>

                            <details className="group bg-white px-4 p-1 mb-3">
                                <summary
                                    className="flex cursor-pointer list-none items-center justify-between p-4 text-lg font-medium text-secondary-900 group-open:text-primary-500 bg-gray-200 rounded-md">
                                    Are pets allowed in the houses listed on your site, and are there any additional fees or rules?
                                    <div className="bg-white p-1 rounded-md">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="block h-5 w-5 group-open:hidden">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="hidden h-5 w-5 group-open:block">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                                        </svg>
                                    </div>
                                </summary>
                                <div className="pb-4 text-secondary-500">Pet policies vary depending on the house you choose. Some houses are pet-friendly, while others may have restrictions. Check the House Rules section on the listing page for specific information regarding pets. If allowed, additional fees may apply.</div>
                            </details>

                            <details className="group bg-white px-4 p-1 mb-3">
                                <summary
                                    className="flex cursor-pointer list-none items-center justify-between p-4 text-lg font-medium text-secondary-900 group-open:text-primary-500 bg-gray-200 rounded-md">
                                    Do all houses listed on your website offer Wi-Fi, and what should I do?
                                    <div className="bg-white p-1 rounded-md">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="block h-5 w-5 group-open:hidden">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="hidden h-5 w-5 group-open:block">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                                        </svg>
                                    </div>
                                </summary>
                                <div className="pb-4 text-secondary-500">Yes, most of our listed houses offer free Wi-Fi as part of their amenities. You can check if a house has Wi-Fi under the Amenities section of the listing. If you need high-speed internet for work or streaming, feel free to contact us for recommendations.</div>
                            </details>

                            <details className="group bg-white px-4 p-1 mb-3">
                                <summary
                                    className="flex cursor-pointer list-none items-center justify-between p-4 text-lg font-medium text-secondary-900 group-open:text-primary-500 bg-gray-200 rounded-md">
                                    What are the different ways to contact customer support?
                                    <div className="bg-white p-1 rounded-md">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="block h-5 w-5 group-open:hidden">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="hidden h-5 w-5 group-open:block">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                                        </svg>
                                    </div>
                                </summary>
                                <div className="pb-4 text-secondary-500">
                                    Our customer support team is available to assist you with any inquiries or issues. You can reach us through email, live chat on our website, or by calling our helpline. We are committed to providing prompt and friendly assistance to ensure a smooth booking experience.
                                </div>
                            </details>
                        </div>
                    </div>


                </div>
                <div className="w-full md:w-1/2">
                    <img src={FAQSIMG} alt="logo" className="" />
                </div>


            </div>
        </div>
    );
};

export default FAQS;