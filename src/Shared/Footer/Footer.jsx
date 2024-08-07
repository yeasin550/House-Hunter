import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
// import logo from '../../assets/logo.png'
import logo from '../../assets/navLogo.png'
const Footer = () => {
    return (
        <footer className="footer text-[16px] mt-10 p-10 bg-[var(--opacity-color)] rounded-t-lg text-base-content">
            <div>
                <img className="w-[150px]" src={logo} alt="" />
                <p>House Hunter Ltd.<br />Providing reliable rent since 1992</p>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <a className="link link-hover">Rent House</a>
                <a className="link link-hover">Buy House</a>
                <a className="link link-hover">Rent Cars</a>
                <a className="link link-hover">Rent Plots</a>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
                <div className="flex items-center gap-3">
                    <a href=""><FaFacebook/></a>
                    <a href=""><FaTwitter/></a>
                    <a href=""><FaInstagram/></a>
                    <a href=""><FaYoutube/></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;