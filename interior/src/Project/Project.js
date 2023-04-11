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
            <div className="projectDetails">
                <div className="clientsInfo">
                    <div>
                        <h4>Client    </h4>
                        <text>Your client name</text>
                    </div>
                    <div>
                        <h4>Category</h4>
                        <text>Interiors</text>
                    </div>                    
                    <div>
                        <h4>Tags    </h4>
                        <text>interior, Home</text>
                    </div>                  <div>
                        <h4>Date    </h4>
                        <text>Date 23,02, 2022</text>
                    </div>                    <div>
                        <h4>Link    </h4>
                        <text>Link example.com</text>
                    </div>
                </div>
                <div className="projectDescriptions">
                    <h1>Minimal Look Bedrooms</h1>
                    <text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. <br/><br/>
                    In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.</text>
                </div>
            </div>
            <div className="projectDescContainer">

                <img src={Images.projectDescImg} alt="projectImg" className="projectDescImg"/>
                <div>
                    <div className="whiteCircle iconType" style={{position: "relative", zIndex: "2"}}>
                                <img src={Images.searchIcon} alt='Maillogo' 
                                style={{position: "absolute", 
                                    top: "20px",
                                    left: "20px",
                                    zIndex: "3"}}/>
                    </div>
                </div>  
            </div>
        </div>
    )
}

export default Project;