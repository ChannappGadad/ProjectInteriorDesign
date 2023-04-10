import NavBar from "../NavBar/NavBar";
import Images from "../Images/Images";
import "./Project.css";

const Project = () => {
    return(
        <div>
            <NavBar/>
            <div className="imagesHeader">
                <img src={Images.projectImg} alt="projectImg"/>
            </div> 
        </div>
    )
}

export default Project;