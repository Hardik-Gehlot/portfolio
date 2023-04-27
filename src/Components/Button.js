const Button = ({text,alternateText,onClick}) => {
  return (
    <button className="btn" role="button" onClick={onClick}><span class="text">{text}</span><span>{alternateText}</span></button>
  )
}

export default Button;
