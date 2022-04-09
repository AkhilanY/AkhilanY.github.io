import ContactForm from "../components/Contact/ContactForm";
import emailjs from '@emailjs/browser';

function ContactUsPage() {

    function sendMail(data) {
        emailjs.send('service_2iciwnk','template_gvhcasd',data,"6kgZAUeWmaLzTgpU9")
        .then(res => {
            alert("Email sent successfully")
        }, err => {
            alert("ERROR! cannot send email. trye sending manually to codingbrothers123@gmail.com.")
        })

    }

    return (
        <div>
            <ContactForm sendMail={sendMail}/>
        </div>
    )
}

export default ContactUsPage;