import styles from './ContactForm.module.css';
import { useRef } from 'react';


function ContactForm(props) {

    var nameIn = useRef();
    var mailIn = useRef();
    var msgIn = useRef();

    function submitHandler(e) {
        e.preventDefault()

        var name = nameIn.current.value;
        var mail = mailIn.current.value;
        var msg = msgIn.current.value;

        var data = {name:name,mail:mail,message:msg}

        props.sendMail(data)
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
            <div className={styles.topbar}>
                <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px" fill="#4071f7"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px" fill="#b4bbcc"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px" fill="#f74040"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
            </div>
            <form onSubmit={submitHandler}>
                <label htmlFor="name">yourName@Cobros:</label>
                <input type="text" placeholder='Your Name...' required ref={nameIn} />
                <label htmlFor="e-mail">yourMail@Cobros:</label>
                <input type="email" placeholder='Your mail id...' ref={mailIn} />
                <label htmlFor="msg">YourMessage@Cobros:</label>
                <textarea id="msg" required placeholder="Your message..." rows={4} ref={msgIn} />
                <button className={styles.submitbtn}>
                    Send mail
                </button>
            </form>
            </div>
            <div className={styles.othercontainer}>
                <h1>Most <span className={styles.yellow}>PROGRAMMERS</span> do <span className={styles.yellow}>PROGRAMMING</span> not because they expect to get <span className={styles.red}>PAID</span> or get <span className={styles.red}>ADULATION</span> by <span className={styles.blue}>PUBLIC</span>, but because it is <span className={styles.green}>FUN TO PROGRAM</span>.</h1>
                <h1> - Linus Torvalds</h1>
            </div>
        </div>
    )
}

export default ContactForm;