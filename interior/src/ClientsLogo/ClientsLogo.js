import "./ClientLogo.css";
import Images from "../Images/Images";

const ClientsLogo = () => {
    return(
        <div className="container">
                <ul>
                    <li>
                     <img src={Images.logo1} alt="homeLogo"/> 
                    </li>
                    <li>
                     <img src={Images.logo2} alt="homeLogo"/> 
                    </li>                    <li>
                     <img src={Images.logo3} alt="homeLogo"/> 
                    </li>                    <li>
                     <img src={Images.logo4} alt="homeLogo"/> 
                    </li>                    <li>
                     <img src={Images.logo5} alt="homeLogo"/> 
                    </li>
                </ul>
        </div>
    )
}

export default ClientsLogo;