import "./Blog.css";
import Images from "../Images/Images";
import NavBar from "../NavBar/NavBar.js";


const Blog = () => {
    return(
        <div>
            <NavBar/>
            <div className="imagesHeader">
                <img src={Images.services} alt="services"/>
                <div class="bottomHead">
                    <h1>Articles &  News</h1>
                    <label>Home / Blog</label>
                </div>
            </div>
            <h2>Latest News</h2> 
            <div className="latestPost">
                <div>
                    <img src={Images.blogLatestImage} alt="Latest Image" className="postImage"/>
                </div>
                <div className="postDescritionDiv">
                    <h5>Low Cost Latest Invented Interior Designing Ideas</h5>
                    <text>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.<br/> <br/>
                    Lorem Ipsum is not simply random text. It has roots in a piece of classica.</text>
                    <div>
                        <label>26 December,2022 </label>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog;