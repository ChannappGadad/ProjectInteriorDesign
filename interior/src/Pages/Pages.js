import ClientsLogo from "../ClientsLogo/ClientsLogo";
import NavBar from "../NavBar/NavBar";
import ProjectsCompleted from "../ProjectsCompleted/ProjectsCompleted";

const Pages = () => {
    return(
        <div>
            <NavBar/>
            <ProjectsCompleted />
            <ClientsLogo/>
            <h2>Pages</h2>
        </div>
    )
}

export default Pages;