import ContactForm from "../ContactForm/ContactForm";
import NavBar from "../NavBar/NavBar";
import Images from "../Images/Images";
import "./Contact.css";

const Contact = () => {
    const socialMediaIcons = [
        {
            id: 1,
            className: "fa fa-sm fa-facebook",
            title: "Facebook"
        },
        {
            id: 2,
            className: "fa fa-sm fa-twitter",
            title: "Twitter"
        },
         {
            id: 3,
            className: "fa fa-sm fa-linkedin",
            title: "Linkedin"
        },
         {
            id: 4,
            className: "fa fa-sm fa-instagram",
            title: "Instagram"
        }
    ]

    return(
        <div>
            <NavBar />

            {/* //Below div is being resused from the service page */}
            <div className="imagesHeader">
                <img src={Images.conatctUS} alt="services"/>
                <div class="bottomHead">
                    <h1>Contact Us</h1>
                    <label>Home / Contact</label>
                </div>
            </div> 
            <div className="contactUsHeading"><label >We love meeting new people<br/> and helping them.</label></div>
            <div className="contactDetails">
                <div className="iconSectionContact">
                    <div>
                        <div className="whiteCircle iconType" style={{position: "relative", zIndex: "2"}}>
                            <img src={Images.mail} alt='Maillogo' 
                            style={{position: "absolute", 
                                top: "24px",
                                left: "24px",
                                zIndex: "3"}}/>
                        </div>
                       <label>info@yourdomain.com</label> 
                    </div>  

                    <div>
                        <div className="whiteCircle iconType" style={{position: "relative", zIndex: "2"}}>
                                <img src={Images.call} alt='Maillogo' 
                                style={{position: "absolute", 
                                    top: "20px",
                                    left: "20px",
                                    zIndex: "3"}}/>
                        </div>
                        <label>+1 (378) 400-1234</label> 
                    </div>   

                    <div>
                        <div className="whiteCircle iconType" style={{position: "relative", zIndex: "2"}}>
                                <img src={Images.globe} alt='Maillogo' 
                                style={{position: "absolute", 
                                    top: "24px",
                                    left: "24px",
                                    zIndex: "3"}}/>
                        </div>
                        <label>www.yourdomain.com</label> 
                    </div> 
                    <div class="socialMediaIconsDiv">
                        {socialMediaIcons.map((items) => {
                            return(
                                <i class={items.className} title={items.title}></i>
                            )
                        })}
                    </div>
                </div>
                <div>
                    <ContactForm />
                    <button className="getStartedBtn sendNowButton">Send Now <img src={Images.vector} alt='Logo' className='vector'/></button>
                </div>
            </div>
            <img src={Images.contactUsMap} alt="Contact Us map" className="contactUsMapImg"/>
            {/* contactUsMap */}
        </div>     
    )
}

export default Contact;