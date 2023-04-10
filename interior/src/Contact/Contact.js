import ContactForm from "../ContactForm/ContactForm";
import NavBar from "../NavBar/NavBar";
import Images from "../Images/Images";

const Contact = () => {
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
            <div className="contactDetails">
                <div>
                    <div>
                       <label>info@yourdomain.com</label> 
                    </div>  
                    <div>
                        <label>+1 (378) 400-1234</label> 
                    </div>                     
                    <div>
                        <label>www.yourdomain.com</label> 
                    </div> 
                </div>
                <div>
                 <ContactForm />
                </div>
            </div>
           <h1> hello</h1>
        </div>     
    )
}

export default Contact;