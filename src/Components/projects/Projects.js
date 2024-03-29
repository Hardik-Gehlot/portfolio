import { useEffect } from "react";
import Project from "./item/Project";
import "./style.scss";
import { useState } from "react";
import { fetchProjects } from "../../database/fetchData";
const Projects = () => {
    var p = {
        movix: {
            title: "Movies Website",
            time: "MAR 2023 - APR 2023",
            desc: ["This is a fully responsive movies website using TMDB API.", "Users can find all their favorite movies and tv shows."],
            technology: ["HTML", "CSS", "REACT", "AXIOS"],
            github: ["https://github.com/Hardik-Gehlot/Movix"],
            preview: ["https://movix-jet.vercel.app/"]
        },
        evoting: {
            title: "E-voting Website",
            time: "DEC 2022 - DEC 2022",
            desc: ["This is fully functional e-commerce website using MERN stack.", "This allows sellers to register and sell their products on our website."],
            technology: ["HTML", "CSS", "SOLIDITY", "REACT", "JS", "GINACHE", "TRUFFLE"],
            github: ["https://github.com/Hardik-Gehlot/E-Voting-System"]
        },
        ecomm: {
            title: "E-commerce website",
            time: "APR 2023 - PRESENT",
            desc: ["This is fully functional e-commerce website using MERN stack.", "This allows sellers to register and sell their products on our website."],
            technology: ["HTML", "CSS", "MONGO", "EXPRESS", "REACT", "NODEJS"],
            github: ["https://github.com/Hardik-Gehlot/e-comm"]
        },
        vendor: {
            title: "Vendor Finding Android App",
            time: "MAR 2023 - MAR 2023",
            desc: ["Vendor finding app (Hackathon Project) that allows the vendor to register themselves and can update their live location. So customers can find them easily."],
            technology: ["Java", "Android", "GoogleMap API", "Firebase Database"],
            github: ["https://github.com/Hardik-Gehlot/Vendors"]
        },
        chatapp: {
            title: "Chat Application (DESKTOP APP)",
            time: "NOV 2022 - JAN 2023",
            desc: ["End-to-end encrypted chat application using JavaFX. It is a client-to-client chat app."],
            technology: ["Java", "Socket Programming", "Cryptography"],
            github: ["https://github.com/Hardik-Gehlot/Realtime-ChatApp"]
        }
    };
    const [projects, setProjects] = useState(null);
    const [category, setCategory] = useState('all');
    const [jsxToRender, setJsxToRender] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchProjects();
                setProjects(data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);
    useEffect(() => {
        if (projects !== null) {
            let counter = 1;
            let jsx = Object.keys(projects).map(key => {
                const obj = projects[key];
                if (category === 'all' || obj?.category === category) {
                    return (
                        <Project key={key} obj={obj} counter={counter++} />
                    );
                }
            });
            setJsxToRender(jsx);
        }
    }, [projects, category]);
    return (
        <section id="projects">
            <div className="content">
                <h1>Projects</h1>
                <ul className="categories">
                    <li className={(category=="all") ? 'active' : ''} onClick={()=>setCategory('all')}>All</li>
                    <li className={category=="web" ? 'active' : ''} onClick={()=>setCategory('web')}>Web</li>
                    <li className={category=="android" ? 'active' : ''} onClick={()=>setCategory('android')}>Android</li>
                    <li className={category=="other" ? 'active' : ''} onClick={()=>setCategory('other')}>Other</li>
                </ul>
                <div className="projectdiv">
                    <div className="items">
                        {(jsxToRender != null) ? jsxToRender : ""}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Projects;