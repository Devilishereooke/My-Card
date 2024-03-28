import myPic from "../Images/meHotCroped.png"
import emailLogo from "../Images/email.svg"
import linkedinLogo from "../Images/linkedin.svg"

export default function Header(){
    return (
        <div className="header-container">
            <img src={myPic} alt="" className="my-pic" />
            <div className="my-name">Devidas Deole</div>
            <div className="my-profession">Full Stack Developer</div>
            <div className="my-web">devidasdeole.website</div>
            <div className="my-contact-info">
                <button className="my-email">
                    <img src={emailLogo} alt="" className="contact-logo" />
                    <div className="contact-name">Email</div>
                </button>
                <button className="my-linkedin">
                    <img src={linkedinLogo} alt="" className="contact-logo" />
                    <div className="contact-name">LinkedIn</div>
                </button>
            </div>
        </div>
    )
}