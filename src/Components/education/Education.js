import { fetchEducation } from "../../database/fetchData";
import "./style.scss";
import { motion as m, useInView} from "framer-motion";
import {useRef, useState,useEffect } from "react";
const Education = () => {
    const ref = useRef(null);
  const inView = useInView(ref);
  const [education, setEducation] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchEducation();
        setEducation(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
    return (
        <div id='education' ref={ref}>
            <section class="design-section">
                <h1>Education</h1>
                <div class="timeline"
                >
                    <div class="timeline-empty">
                    </div>
                    <div class="timeline-middle">
                        <div class="timeline-circle">
                            <img src={process.env.PUBLIC_URL+"/graduation.png"} />
                        </div>
                    </div>
                    <m.div 
                    initial={{x:"100%"}}
                    animate={inView ? { x: "0%" } : { x: "100%" }}
                    transition={{duration:1,ease: "easeInOut"}}
                    class="timeline-component timeline-content">
                        <h5 className="time">{education && education.btech.time}</h5>
                        <h3 className="course">{education && education.btech.course}</h3>
                        <h4 className="place">{education && education.btech.institute}<br></br>{education && education.btech.location}</h4>
                        <h6 className="percent">{education && education.btech.grade}</h6>
                    </m.div>
                    <m.div
                    initial={{x:"-100%"}}
                    animate={inView ? { x: "0%" } : { x: "-100%" }}
                    transition={{duration:1,ease: "easeInOut"}}
                     class="timeline-component timeline-content">
                        <h5 className="time">{education && education.hsc.time}</h5>
                        <h3 className="course">{education && education.hsc.course}</h3>
                        <h4 className="place">{education && education.hsc.institute}<br></br>{education && education.hsc.location}</h4>
                        <h6 className="percent">{education && education.hsc.grade}</h6>
                    </m.div>
                    <div class="timeline-middle">
                        <div class="timeline-circle">
                            <img src={process.env.PUBLIC_URL+"/graduation.png"} />
                        </div>
                    </div>
                    <div class="timeline-empty">
                    </div>
                    <div class="timeline-empty">
                    </div>
                    <div class="timeline-middle">
                        <div class="timeline-circle">
                            <img src={process.env.PUBLIC_URL+"/graduation.png"} />
                        </div>
                    </div>
                    <m.div
                    initial={{x:"100%"}}
                    animate={inView ? { x: "0%" } : { x: "100%" }}
                    transition={{duration:1,ease: "easeInOut"}}
                     class=" timeline-component timeline-content">
                        <h5 className="time">{education && education.ssc.time}</h5>
                        <h3 className="course">{education && education.ssc.course}</h3>
                        <h4 className="place">{education && education.ssc.institute}<br></br>{education && education.ssc.location}</h4>
                        <h6 className="percent">{education && education.ssc.grade}</h6>
                    </m.div>

                </div>
            </section >
        </div>
    )
}

export default Education;
