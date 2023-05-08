import Project from "./item/Project";
import "./style.scss";
const Projects = () => {
    var projects = {
        movix:{
            title:"Movies Website",
            time:"MAR 2023 - APR 2023",
            desc:["This is a fully responsive movies website using TMDB API.","Users can find all their favorite movies and tv shows."],
            technology:["HTML", "CSS", "REACT", "AXIOS"],
            github:["https://github.com/Hardik-Gehlot/Movix"],
            preview:["https://movix-jet.vercel.app/"]
        },
        evoting:{
            title:"E-voting Website",
            time:"DEC 2022 - DEC 2022",
            desc:["This is fully functional e-commerce website using MERN stack.","This allows sellers to register and sell their products on our website."],
            technology:["HTML", "CSS", "SOLIDITY", "REACT", "JS", "GINACHE", "TRUFFLE"],
            github:["https://github.com/Hardik-Gehlot/E-Voting-System"]
        },
        ecomm:{
            title:"E-commerce website",
            time:"APR 2023 - PRESENT",
            desc:["This is fully functional e-commerce website using MERN stack.","This allows sellers to register and sell their products on our website."],
            technology:["HTML", "CSS", "MONGO", "EXPRESS", "REACT", "NODEJS"],
            github:["https://github.com/Hardik-Gehlot/e-comm"]
        },
        vendor:{
            title:"Vendor Finding Android App",
            time:"MAR 2023 - MAR 2023",
            desc:["Vendor finding app (Hackathon Project) that allows the vendor to register themselves and can update their live location. So customers can find them easily."],
            technology:["Java", "Android", "GoogleMap API", "Firebase Databas"],
            github:["https://github.com/Hardik-Gehlot/Vendors"]
        },
        chatapp:{
            title:"Chat Application (DESKTOP APP)",
            time:"NOV 2022 - JAN 2023",
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
                        <Project obj={projects.vendor}/>
                        <Project obj={projects.chatapp}/>
                        <Project obj={projects.evoting}/>
                    </div>
                </div>
            </div>
        </section>
  )
}
export default Projects;