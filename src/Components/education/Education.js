import Item from "./item/Item";
import "./style.scss";
const Education = () => {
    let education = {
        btech:{
            time:"2020-present",
            course:"B.Tech in C.S.E",
            from:"Arya Institute of Engineering and Technology",
            location:"Jaipur,Rajasthan",
            percent:"9.2 CGPA"
        },
        hsc:{
            time:"2019-2020",
            course:"Higher Secondary Education",
            from:"Shree Mahadev Baburao Choughule college",
            location:"Bhiwandi,Maharashtra",
            percent:"74.4% in Maharashtra state Board"
        },
        ssc:{
            time:"2017-2018",
            course:"Senior Secondary Education",
            from:"Shree Halari Visa Oswal Vidyalaya & jr. college",
            location:"Bhiwandi,Maharashtra",
            percent:"81.6% in Maharashtra state Board"
        }
    }
    return (
        <div id="education">
            <h1>Education</h1>
                <div className="edudiv">
                    <div className="bar" />
                    <div className="items">
                        <Item time={education.btech.time} course={education.btech.course} from={education.btech.from}
                        location={education.btech.location} percent={education.btech.percent}></Item>
                        <Item time={education.hsc.time} course={education.hsc.course} from={education.hsc.from}
                        location={education.hsc.location} percent={education.hsc.percent}></Item>
                        <Item time={education.ssc.time} course={education.ssc.course} from={education.ssc.from}
                        location={education.ssc.location} percent={education.ssc.percent}></Item>
                    </div>
                </div>
        </div>
    )
}

export default Education;
