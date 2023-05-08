import ContactForm from "./form/ContactForm";
import github from "../../assets/images/github.png";
import linkedin from "../../assets/images/linkedin.png";
import email from "../../assets/images/email.png";
import call from "../../assets/images/call.png";
import location from "../../assets/images/location.png";
import "./style.scss";
const ContactMe = () => {
    return (
        <div id="contactme">
            <div className="content">
                <div className="contactdiv">
                    <div className="left">
                        <div className="form">
                            <div>
                                <h2>Contact Me</h2>
                                <p>Feel free to contact me anytime.</p><br></br>
                                <ContactForm></ContactForm>
                            </div>
                        </div>
                        <div className="links">
                            <a href="https://github.com/Hardik-Gehlot" className="link">
                                <img src={github}></img><span>Github</span>
                            </a>
                            <a href="https://www.linkedin.com/in/hardik-gehlot-2b34aa200/" className="link">
                                <img src={linkedin}></img><span>LinkedIn</span>
                            </a>
                        </div>
                    </div>
                    <div className="right" >
                    <div className="info">
                        <div className="info-item">
                            <img src={email}></img><span>hardikgehlot2303@outlook.com</span>
                        </div>
                        <div className="info-item">
                            <img src={call}></img><span>+91 9096706395</span>
                        </div>
                        <div className="info-item">
                            <img src={location}></img><span>Jaipur</span>
                        </div>
                    </div>
                    </div>
                   
                </div>

            </div>
        </div>
    )
}
export default ContactMe;
