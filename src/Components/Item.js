import hat from "../assets/images/graduation.png"
const Item = ({time,course,from,location,percent}) => {
    return (
        <div className="item">
            <img src={hat}></img>
            <div className="text">
                <h5 className="time">{time}</h5>
                <h3 className="course">{course}</h3>
                <h4 className="place">{from}<br></br>{location}</h4>
                <h6 className="percent">{percent}</h6>
            </div>
        </div>
    )
}

export default Item;
