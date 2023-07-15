import "./style.scss";
import { motion as m, useInView} from "framer-motion";
import {useRef } from "react";
const Skill = ({image,title}) => {
  const ref = useRef(null);
  const inView = useInView(ref);
  return (
    <m.div ref={ref}
    initial={{opacity:0}}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{duration:1,ease: "easeInOut"}}
    className="skill-item">
      <img src={image} />
      <h4 className="title">{title}</h4>
    </m.div>
  )
}
export default Skill;