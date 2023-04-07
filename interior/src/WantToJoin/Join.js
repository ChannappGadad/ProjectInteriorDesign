import "./Join.css";
import Images from "../Images/Images";

const Join = () => {
    return(
        <div className="container">
            <div>
                <h1>Wanna join the interno?</h1>
                <p>It is a long established fact  will be distracted.</p>
                <div className="contactUs">
                    <button >
                        Contact With Us
                        <img src={Images.blackArrow} alt='Logo'/>
                    </button>
                </div>

            </div>

        </div>
    )
}

export default Join;