import ContactForm from "./form/ContactForm";
import { MdOutlineEmail, MdLocationPin} from "react-icons/md";
import {FaPhoneAlt,FaGithub as Github, FaLinkedin as LinkedIn} from "react-icons/fa";
import "./style.scss";
const ContactMe = () => {
    return (
        <div id="contactme">
            <h1>Contact</h1>
            <div className="content">
                <div className="contactdiv">
                    <div className="left">
                        <div className="form">
                            <div>
                                <ContactForm></ContactForm>
                            </div>
                        </div>
                        <div className="links">
                            <a href="https://github.com/Hardik-Gehlot" className="link">
                                <Github/><span>Github</span>
                            </a>
                            <a href="https://www.linkedin.com/in/hardik-gehlot2303/" className="link">
                                <LinkedIn/><span>LinkedIn</span>
                            </a>
                        </div>
                    </div>
                    <div className="right" >
                        <h3>Get in Touch</h3>
                        <div className="info">
                            <div className="info-item">
                                <div className="icon"><MdOutlineEmail/></div>
                                <span>hardikgehlot2303@gmail.com</span>
                            </div>
                            <div className="info-item">
                            <div className="icon"><FaPhoneAlt/></div><span>+91-9096706395</span>
                            </div>
                            <div className="info-item">
                            <div className="icon"><MdLocationPin/></div><span>Jaipur</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ContactMe;
