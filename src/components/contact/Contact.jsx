import React, { useRef } from "react";
import "components/contact/contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "emailjs-com";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gqm5m5h",
        "template_ug8lqli",
        form.current,
        "4VKwOhsWQ44kIb63O"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>jacoblknudson@gmail.com</h5>
            <a
              href="mailto:jacoblknudson@gmail.com?subject=Job Opprotunity"
              target="_blank"
              rel="noreferrer"
            >
              Email
            </a>
          </article>
          <article className="contact_option">
            <RiMessengerLine className="contact_option-icon" />
            <h4>Messenger</h4>
            <h5>Jacob Knudson</h5>
            <a href="https://m.me/ja.knudson1" target="_blank" rel="noreferrer">
              Facebook Message
            </a>
          </article>

          <article className="contact_option">
            <BsWhatsapp className="contact_option-icon" />
            <h4>SMS</h4> <h5>435-680-4753</h5>
            <a
              href="https://api.whatsapp.com/send?phone=14356804753"
              target="_blank"
              rel="noreferrer"
            >
              Text Me
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="example@example.com"
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
export default Contact;
