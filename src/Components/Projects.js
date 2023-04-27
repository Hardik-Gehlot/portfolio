import Project from "./Project";
const Projects = () => {
    var projects = {
        tripPlanner:{
            title:"trip planner",
            desc:["https://www.github.com/Hardik-Gehlot/trip-planner","Android","Web Development","Android application using java,firebase,google maps and google ads."]
        },
        evoting:{
            title:"E-voting",
            desc:["This D-centralized voting web application allows users to vote for their favorite candidates","React, Web3, Solidity, Truffle, Ganache"]
        },
        captionapp:{
            title:"Caption App",
            desc:["This Website allows users to upload captions and read others' captions based on their favorite category","JSP, Servlet, Spring, Hibernate, MySQL"]
        },
        notes4u:{
            title:"notes4u",
            desc:["https://github.com/Hardik-Gehlot/notes4u","This is online platform for sharing variety of pdf","HTML, CSS, JS, REACT, PHP, MYSQL"]
        },
        chatapp:{
            title:"chatapp",
            desc:["https://github.com/Hardik-Gehlot/chatapp","This is realtime chatapp using java","JAVA, JAVAFX, SOCKET PROGRAMMING, MULTITHREADING, CRYPTOGRAPHY"]
        },
        portfolio:{
            title:"portfolio",
            desc:["https://github.com/Hardik-Gehlot/portfolio","This is a website that describes me and my skill sets","HTML, CSS, REACT"]
        }
    };
  return (
    <section id="projects">
            <div className="content">
                <h1>Projects</h1>
                <div className="projectdiv">
                    <div className="items">
                        <Project obj={projects.tripPlanner}/>
                        <Project obj={projects.evoting}/>
                        <Project obj={projects.captionapp}/>
                        <Project obj={projects.chatapp}/>
                        <Project obj={projects.portfolio}/>
                        <Project obj={projects.notes4u}/>
                    </div>
                </div>
            </div>
        </section>
  )
}
export default Projects;