/* eslint-disable react/no-unescaped-entities */
// import { FaLocationArrow, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import Swal from "sweetalert2";
import owner from "../../assets/owner.jpg";
const WebsiteOwnerDetails = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_liy6ghd",
        "template_28czbk9",
        form.current,
        "rVGjQv_8CylX1hiCm"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire("Success!", "Your email has been send.", "success");
          form.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div>
        <h1 className="text-[#8861B3] font-bold text-3xl mb-2">
          Md Yeasin Mia (Creator!!!)
        </h1>
        <p>
          Hi, Welcome to my House Hunter Website!!! I am a passionate Mern stack
          web developer with expertise in HTML, CSS, JavaScript, React,
          Express.js, Node.js, and MongoDB. With a strong foundation in
          front-end development, I strive to create captivating user interfaces
          and seamless user experiences. I enjoy turning ideas into functional
          and visually appealing websites and Web Applications.
        </p>
        {/* contact form */}
        <div className="pb-4">
          <div>
            <div
              className="content-box mb-5 w-full py-3"
              // data-aos="fade-up-right"
            >
              <h1 className="text-[#7a4daa] my-3 font-semibold text-2xl">
                Let's talk & chat !!
              </h1>
              <form ref={form} onSubmit={sendEmail} className="flex flex-col">
                <div className="flex gap-4 ">
                  <input
                    className="bg-transparent h-14 w-1/2 rounded border-[1px] border-[#3a1775] focus:ring-border-[#7C3AED] pl-4 dark:text-white placeholder-text-[#729CB8]"
                    type="text"
                    name="from_name"
                    required
                    placeholder="Name"
                  />
                  <input
                    className="bg-transparent h-14 w-1/2 rounded border-[1px] border-[#3a1775] pl-4 dark:text-white placeholder-text-[#729CB8]"
                    type="email"
                    name="email_id"
                    required
                    placeholder="Email"
                  />
                </div>
                <div className="flex gap-4 py-4">
                  <input
                    className="bg-transparent h-14 w-2/3 rounded border-[1px] border-[#3a1775] pl-4 dark:text-white placeholder-text-[#729CB8]"
                    type="text"
                    required
                    name="from_subject"
                    placeholder="Subject"
                  />
                  <input
                    className="bg-transparent h-14 w-1/3 rounded border-[1px] border-[#3a1775] pl-4 dark:text-white placeholder-text-[#729CB8]"
                    type="phone"
                    name="user_phone"
                    placeholder="Phone"
                  />
                </div>
                <textarea
                  className="bg-transparent rounded border-2 border-[#3a1775] dark:bg-[linear-gradient(90deg,#0F172A,#38095a);] h-28 pl-4 dark:text-white w-full placeholder-text-[#729CB8] pt-2"
                  rows={20}
                  cols={35}
                  name="message"
                  required
                  placeholder="Message"
                ></textarea>
                <button
                  // onClick={userSendEmail}
                  className=" border-[#6026c4] border-[1px] w-full py-[16px] rounded-lg hover:shadow-md shadow-sm  px-8 my-8 text-white font-bold transition-transform transform-gpu hover:-translate-y-1 hover:shadow-gray-500  bg-gradient-to-r from-[#0F172A] via-[#1e0344] to-[#3b053b]"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
          {/* <div data-aos="zoom-in">
              <img
                src="https://i.ibb.co/bm9Rj9r/Screenshot-2023-06-26-103646-removebg-preview.png"
                alt=""
              />
            </div> */}
        </div>
      </div>
      <div>
        <img className="rounded-md" src={owner} alt="" />
      </div>
    </div>
  );
};

export default WebsiteOwnerDetails;
