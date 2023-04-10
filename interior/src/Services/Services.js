import NavBar from "../NavBar/NavBar";
import Join from "../WantToJoin/Join";
import "./Services.css";
import Images from "../Images/Images";

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

    const howWeWork = [
        {
            number: 1,
            heading: "Concept & Details",
            desc: "It is a long established fact  will be distracted. Lorem Ipsum is simply dummy from text of theand typesetting indufstry. ",
            imgSrc: Images.concept,
            altTxt: "Conecpt",
            imgIcon: Images.conceptIcon
        },
        {
            number: 2,
            heading: "Idea for Work",
            desc: "It is a long established fact  will be distracted. Lorem Ipsum is simply dummy from text of theand typesetting indufstry. ",
            imgSrc: Images.idea,
            altTxt: "Idea",
            imgIcon: Images.ideaIcon
        },
        {
            number: 3,
            heading: "Design",
            desc: "It is a long established fact  will be distracted. Lorem Ipsum is simply dummy from text of theand typesetting indufstry. ",
            imgSrc: Images.design,
            altTxt: "Design",
            imgIcon: Images.designIcon
        },
        {
            number: 4,
            heading: "Perfection",
            desc: "It is a long established fact  will be distracted. Lorem Ipsum is simply dummy from text of theand typesetting indufstry. ",
            imgSrc: Images.perfection,
            altTxt: "Perfection",
            imgIcon: Images.perfectionIcon
        }

    ]
    return(
        <div>   
            <NavBar />   
            <div className="imagesHeader">
                <img src={Images.services} alt="services"/>
                <div class="bottomHead">
                    <h1>Services</h1>
                    <label>Home / Services</label>
                </div>
            </div> 
            <div className="itemDesc">
                {servicesItems.map((items, index) => {
                    return(
                        <div>
                            <h3>{items.heading}</h3>
                            <text>{items.desc}</text>
                            <label>Read more<img src={Images.vector} alt='Logo' className='vector'/></label>
                        </div> 
                    )
                })}
            </div> 
            <div>
                <div className="followHeader">
                        <h1>Follow Our Projects</h1>
                        <text>It is a long established fact that a reader will be distracted by the of readable <br/>
                            content of page  lookings at its layouts  points.</text>
                </div>
                <div className="divConatiner">
                    {
                        howWeWork.map((items) => {
                            return(
                                <div className="howWeWorkCotainer">
                                    <img src={items.imgSrc} alt={items.altTxt} className="projectsImage"/>
                                    <div className="descDiv">
                                        <div className="imgAndNum">
                                            <img src={items.imgIcon} alt={items.altTxt}/>
                                            <label>0{items.number}</label>
                                        </div>
                                        <div className="descriptionText">
                                            <h2>{items.heading}</h2>
                                            <text>{items.desc}</text>
                                        </div>
                                    </div>

                                </div> 
                            )
                        })
                    }
                </div>
            </div>    
            <Join />
        </div>
    )
}

export default Services;