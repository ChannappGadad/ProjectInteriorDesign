import "../Home/Home.css";
import NavBar from "../NavBar/NavBar";
import Images from "../Images/Images";
import Join from "../WantToJoin/Join";


const Home = () => {
    const planItems = [
        {
            id: 1,
            heading: "Project Plan",
            des: "There are many variations of the passages of lorem Ipsum from available, majority."
            
        },
        {
            id: 2,
            heading: "Interior Work",
            des: "There are many variations of the passages of lorem Ipsum from available, majority."
        },        
        {
            id: 3,
            heading: "Realization",
            des: "There are many variations of the passages of lorem Ipsum from available, majority."
        }
    ]

    const peopleTestimony = [
        {
            id:1,
            img: Images.natasha,
            name: "Natasha Mith",
            place: "Sydney, USA",
            desc: "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been.",
            altText: "Natasha"
        },
        {
            id:2,
            img: Images.raymond,
            name: "Raymond Galario",
            place: "Sydney, Australia",
            desc: "Raymond Galario Sydney, Australia Lorem Ipsum is simply dummy text of the typesetting industry.Ipsum has been scrambled it to make a type book.",
            altText: "Raymond Galario"
        },
        {
            id:3,
            img: Images.benny,
            name: "Benny Roll",
            place: "Sydney, New York",
            desc: "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been scrambled.",
            altText: "Benny Roll"
        }
    ]

    return(
        <div>
            <div>
                <NavBar />
            </div>
            <section className="homeSectionCont">
                <img src={Images.home} alt='Logo' className='homeImage'/>
                <div className="overlappedDiv">
                    <label className="homeLabel">Let Your Home Be Unique</label>
                    <text className="homeDescTxt">There are many variations of the passages of lorem Ipsum fromavailable,variations of the passages.</text>
                        <button className="getStartedBtn">
                            Get Started <img src={Images.vector} alt='Logo' className='vector'/>
                        </button>
                </div>
            </section>
            <section className="itemsDesc">
                    {
                        planItems.map((items) => {
                            return(
                                <div>
                                    <h3>{items.heading}</h3>
                                    <label >{items.des}</label><br/>
                                    <button>Read More <img src={Images.vector} alt='Logo' className='vector'/></button>
                                </div>
                            )
                        })
                    }

            </section>
            <section className="stylishLiving">
                <div>
                    <h2>We Create The Art Of Stylish Living Stylishly</h2>
                    <label>
                        It is a long established fact that a reader will be distracted by the of readable 
                        content of a page when lookings at its layouts the points of using 
                        that it has a more-or-less normal.
                    </label>
                    <div className="conatcts">
                        <div className="circleBase type" style={{position: "relative", zIndex: "2"}}>
                            <img src={Images.call} alt='Logo' 
                            style={{position: "absolute", 
                            top: "20px",
                            left: "20px",
                            zIndex: "3"}}/>
                        </div>
                        <div>
                            <h6>012345678</h6>
                            <label>Call Us Anytime</label>
                        </div>
                    </div>
                    <button className="getStartedBtn">
                        Get Free Estimate<img src={Images.vector} alt='Logo' className='vector'/>
                    </button>
                </div>
                <div>
                    <img src={Images.stylishHome} alt='homeStylish' className='homeStylish'/>
                </div>
            </section>
            <section className="peopleThink">
                <h1>What the People Thinks About Us</h1>
                <div className="profSect">     
                    {peopleTestimony.map((item) => {
                            return (
                                <div className="profilDiv">
                                    <div className="profiCont">
                                        <img src={item.img} alt={item.altText}/>
                                        <div>
                                            <h4>{item.name}</h4>
                                            <label>{item.place}</label>
                                        </div>
                                    </div>
                                    <p>{item.desc}</p>
                                </div>
                            )
                        })
                    }
                </div>   
            </section>
            <section>
               <Join />
            </section>
        </div>
    )
}

export default Home;