import "./style.scss";
const ContactForm = () => {
    function sendMail(e) {
        e.preventDefault();
        let subject = document.getElementsByName("subject")[0];
        let name = document.getElementsByName("name")[0];
        let msg = document.getElementsByName("msg")[0];
        if (name.value !== "" || msg.value !== "") {
            let body = name.value + ":  " + msg.value;
            let emailUrl = `mailto:hardikgehlot2303@gmail.com?subject=${subject}&body=${body}`;
            name.value = "";
            msg.value = "";
            window.open(emailUrl);
        }
    }
    return (
        <form onSubmit={sendMail}>
            <input name="name" placeholder="Name" required></input><br></br>
            <input name="subject" type="text" placeholder="Subject" required></input><br></br>
            <textarea name="msg" placeholder="Message"></textarea>
            <button type="submit">SEND</button>
        </form>
    )
}
export default ContactForm;