import "../Home/Home.css";
import NavBar from "../NavBar/NavBar";
import Images from "../Images/Images";


const Home = () => {
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
        </div>
    )
}

export default Home;