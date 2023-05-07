import hat from "../../assets/images/graduation.png";
import "./style.scss";
const Education = () => {
    let education = {
        btech: {
            time: "2020-present",
            course: "B.Tech in C.S.E",
            from: "Arya Institute of Engineering and Technology",
            location: "Jaipur,Rajasthan",
            percent: "9.2 CGPA"
        },
        hsc: {
            time: "2019-2020",
            course: "Higher Secondary Education",
            from: "Shree Mahadev Baburao Choughule college",
            location: "Bhiwandi,Maharashtra",
            percent: "74.4% in Maharashtra state Board"
        },
        ssc: {
            time: "2017-2018",
            course: "Senior Secondary Education",
            from: "Shree Halari Visa Oswal Vidyalaya & jr. college",
            location: "Bhiwandi,Maharashtra",
            percent: "81.6% in Maharashtra state Board"
        }
    }
    return (
        <div id='education'>
            <section class="design-section">
                <h1>Education</h1>
                <div class="timeline">
                    <div class="timeline-empty">
                    </div>
                    <div class="timeline-middle">
                        <div class="timeline-circle">
                            <img src={hat} />
                        </div>
                    </div>
                    <div class="timeline-component timeline-content">
                        <h5 className="time">{education.btech.time}</h5>
                        <h3 className="course">{education.btech.course}</h3>
                        <h4 className="place">{education.btech.from}<br></br>{education.btech.location}</h4>
                        <h6 className="percent">{education.btech.percent}</h6>
                    </div>
                    <div class="timeline-component timeline-content">
                        <h5 className="time">{education.hsc.time}</h5>
                        <h3 className="course">{education.hsc.course}</h3>
                        <h4 className="place">{education.hsc.from}<br></br>{education.hsc.location}</h4>
                        <h6 className="percent">{education.hsc.percent}</h6>
                    </div>
                    <div class="timeline-middle">
                        <div class="timeline-circle">
                            <img src={hat} />
                        </div>
                    </div>
                    <div class="timeline-empty">
                    </div>
                    <div class="timeline-empty">
                    </div>
                    <div class="timeline-middle">
                        <div class="timeline-circle">
                            <img src={hat} />
                        </div>
                    </div>
                    <div class=" timeline-component timeline-content">
                        <h5 className="time">{education.ssc.time}</h5>
                        <h3 className="course">{education.ssc.course}</h3>
                        <h4 className="place">{education.ssc.from}<br></br>{education.ssc.location}</h4>
                        <h6 className="percent">{education.ssc.percent}</h6>
                    </div>

                </div>
            </section >
        </div>
    )
}

export default Education;
