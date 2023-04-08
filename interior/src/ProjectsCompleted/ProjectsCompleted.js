import "./ProjectsCompleted.css";

const ProjectsCompleted = () => {
    const projects = [
        {
            id: 1,
            numberOfProject: 12,
            review: "Years Of Experiance",
            verticalLine: "verticalLine"
        },
        {
            id: 2,
            numberOfProject: 85,
            review: "Success Project",
            verticalLine: "verticalLine"
        },        {
            id: 3,
            numberOfProject: 15,
            review: "Active Project",
            verticalLine: "verticalLine"
        },        {
            id: 4,
            numberOfProject: 95,
            review: "Happy Customers",
            verticalLine: ""
        }
    ]
    return(
        <div className="proCompCotainer">
            {
               projects.map((items) => {
                return(
                    <div>
                        <div className="items">
                                <label>{items.numberOfProject}</label>
                                <text>{items.review}</text>
                        </div>
                        <div className={items.verticalLine}></div>
                    </div>
                )
               }) 
            }
        </div>
    )
}

export default ProjectsCompleted;