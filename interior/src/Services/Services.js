import NavBar from "../NavBar/NavBar";
import Join from "../WantToJoin/Join";
import "./Services.css";

const Services = () => {
    const servicesItems = [
        {
            id:1,
            heading: "Project Plan",
            desc: "There are many variations of the passages of lorem Ipsum from available, majority."
        },
        {
            id:2,
            heading: "Interior Work",
            desc: "There are many variations of the passages of lorem Ipsum from available, majority."
        },        
        {
            id:3,
            heading: "Retail Design",
            desc: "There are many variations of the passages of lorem Ipsum from available, majority."
        },        
        {
            id:4,
            heading: "2d/3d Art Work",
            desc: "There are many variations of the passages of lorem Ipsum from available, majority."
        },        
        {
            id:5,
            heading: "Interior Work",
            desc: "There are many variations of the passages of lorem Ipsum from available, majority."
        },        
        {
            id:6,
            heading: "Decoration Work",
            desc: "There are many variations of the passages of lorem Ipsum from available, majority."
        },
    ]
    return(
        <div className="hello">   
            <NavBar />      
            <h2>Services</h2>
   
            <Join />
        </div>
    )
}

export default Services;