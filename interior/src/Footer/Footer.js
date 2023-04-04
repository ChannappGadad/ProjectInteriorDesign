import "./Footer.css";
import Images from "../Images/Images";

const Footer = () => {
    const logos = [
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
        <div class="footer">
            <div class="footer__addr">
                <div className="Logo">
                   <img src={Images.logo1} alt='Logo' className='logoImage'/>
                    <h1 class="footer__logo">Interno</h1>
                </div>
            
                <span className="interna_label">
                    It is a long established fact that a reader<br/>will be distracted lookings.
                </span>

                <div class="socialMediaLogo">
                        {logos.map((items) => {
                            return(
                                <i class={items.className} title={items.title}></i>
                            )
                        })}
                </div>
            </div>
  
            <ul class="footer__nav">
                <li class="nav__item">
                    <h2 class="nav__title">Pages</h2>

                    <ul class="nav__ul">
                         <li>
                            <a href="#">About Us</a>
                        </li>
                        <li>
                            <a href="#">Our Projects</a>
                        </li>
                        <li>
                            <a href="#">Our Team</a>
                        </li>
                        <li>
                            <a href="#">Contact Us</a>
                        </li>
                        <li>
                            <a href="#">Services</a>
                        </li>                    
                    </ul>
                </li>
        
                <li class="nav__item nav__item--extra">
                    <h2 class="nav__title">Services</h2>
        
                    <ul class="nav__ul nav__ul--extra">
                    <li>
                    <a href="#">Kitchen</a>
                    </li>
                    
                    <li>
                    <a href="#">Living Area</a>
                    </li>
                    
                    <li>
                    <a href="#">Bathroom</a>
                    </li>
                    
                    <li>
                    <a href="#">Dinning Hall</a>
                    </li>
                    
                    <li>
                    <a href="#">Bedroom</a>
                    </li>
                </ul>
                </li>
        
                <li class="nav__item">
                    <h2 class="nav__title">Contact</h2>
                    
                    <address>
                        <label>55 East Birchwood Ave,</label>
                        <label>Brooklyn, New York 11201</label>          
                        <a class="footer_Email">contact@interno.com</a>
                        <a class="footer__Contact"> (123) 456 - 7890 </a>
                    </address>
                    
                </li>
            </ul>
            {/* <label>Copyright © Interno | Designed by Victorflow Templates - Powered by Webflow</label> */}
        </div>
    )
}

export default Footer;