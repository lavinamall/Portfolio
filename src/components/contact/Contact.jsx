import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import "./contact.scss";

export default function Contact() {
  const [message, setMessage] = useState(false);
  const [errormessage, setErrorMessage] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_wuq4o7n', 'template_ql9y94m', form.current, 'clbtIXKnIMA2toKm3')
      .then((result) => {
        setMessage(true);
        console.log(result.text);
      }, (error) => {
        setErrorMessage(true);
        console.log(error.text);
      });
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" placeholder="Your name" />
          <input type="email" name="user_email" placeholder="Your email" />
          <textarea name="message" placeholder="Message" />
          {/* <input type="submit" value="Send" /> */}
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
          {errormessage && <span className="error">Error in sending email :(, please refresh & try again :)</span>}
        </form>
      </div>
    </div>
  );
}
