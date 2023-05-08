import Project from "./item/Project";
import "./style.scss";
const Projects = () => {
    var projects = {
        movix:{
            title:"Movies Website",
            time:"MARCH 2023 - APRIL 2023",
            desc:["This is a fully responsive movies website using TMDB API.","Users can find all their favorite movies and tv shows."],
            technology:["HTML", "CSS", "REACT", "AXIOS"],
            github:["https://github.com/Hardik-Gehlot/Movix"],
            preview:["https://movix-jet.vercel.app/"]
        },
        evoting:{
            title:"E-voting Website",
            time:"APRIL 2023 - PRESENT",
            desc:["This is fully functional e-commerce website using MERN stack.","This allows sellers to register and sell their products on our website."],
            technology:["HTML", "CSS", "SOLIDITY", "REACT", "JS", "GINACHE", "TRUFFLE"],
            github:["https://github.com/Hardik-Gehlot/E-Voting-System"]
        },
        ecomm:{
            title:"E-commerce website",
            time:"APRIL 2023 - PRESENT",
            desc:["This is fully functional e-commerce website using MERN stack.","This allows sellers to register and sell their products on our website."],
            technology:["HTML", "CSS", "MONGO", "EXPRESS", "REACT", "NODEJS"],
            github:["https://github.com/Hardik-Gehlot/e-comm"]
        },
        vendor:{
            title:"Vendor Finding Android App",
            time:"MARCH 2023 - MARCH 2023",
            desc:["Vendor finding app (Hackathon Project) that allows the vendor to register themselves and can update their live location. So customers can find them easily."],
            technology:["Java", "Android", "GoogleMap API", "Firebase Databas"],
            github:["https://github.com/Hardik-Gehlot/Vendors"]
        },
        chatapp:{
            title:"Chat Application (DESKTOP APP)",
            time:"NOVEMBER 2022 - JANUARY 2023",
            desc:["End-to-end encrypted chat application using JavaFX. It is a client-to-client chat app."],
            technology:["Java", "Socket Programming", "Cryptography"],
            github:["https://github.com/Hardik-Gehlot/Realtime-ChatApp"]
        }
    };
  return (
    <section id="projects">
            <div className="content">
                <h1>Projects</h1>
                <div className="projectdiv">
                    <div className="items">
                        <Project obj={projects.ecomm}/>
                        <Project obj={projects.movix}/>
                        <Project obj={projects.evoting}/>
                        <Project obj={projects.vendor}/>
                        <Project obj={projects.chatapp}/>
                    </div>
                </div>
            </div>
        </section>
  )
}
export default Projects;