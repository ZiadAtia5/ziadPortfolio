import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import emailjs from "@emailjs/browser";
import { useState, useEffect, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";

import "./styles/contact.css";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    const name = e.target.user_name.value.trim();
    const email = e.target.user_email.value.trim();
    const message = e.target.message.value.trim();

    if (!name || !email || !message) {
      toast.error("All fields are required!");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Invalid email format!");
      return;
    }

    setLoading(true);

    formRef.current.time.value = new Date().toLocaleString();

    emailjs
      .sendForm(
        "service_tvetsal", // Service ID
        "template_j8bimym", // Template ID
        formRef.current,
        "_2ydXmHhlri5KtDL3", // Public Key
      )
      .then(
        () => {
          setLoading(false);
          toast.success("Message sent successfully ✅");
          formRef.current.reset();
        },
        (error) => {
          setLoading(false);
          toast.error("Failed to send message ❌");
          console.error(error);
        },
      );
  };

  return (
    <div className="contact">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="container">
        <div className="a-header">
          <h2>Get in Touch</h2>
          <span className="line"></span>
        </div>

        <div className="c-content">
          <div className="c-left">
            <div className="c-l-content">
              <h3>Contact Information</h3>

              <div className="l-box" data-aos="fade-right" data-aos-delay="100">
                <div className="c-icon">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div className="text">
                  <h3>Email</h3>
                  <p>ziad.atia.work@gmail.com</p>
                </div>
              </div>

              <div className="l-box" data-aos="fade-right" data-aos-delay="200">
                <div className="c-icon">
                  <FontAwesomeIcon icon={faPhone} />
                </div>
                <div className="text">
                  <h3>Phone</h3>
                  <p>+2001274285568</p>
                </div>
              </div>

              <div className="l-box" data-aos="fade-right" data-aos-delay="300">
                <div className="c-icon">
                  <FontAwesomeIcon icon={faLocationDot} />
                </div>
                <div className="text">
                  <h3>Location</h3>
                  <p>Egypt</p>
                </div>
              </div>

              <h3
                className="follow-title"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Follow Me
              </h3>
              <div
                className="follow-box"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <a
                  href="https://www.linkedin.com/in/ziad-atia-2b8642286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a
                  href="https://github.com/ZiadAtia5/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                  href="https://wa.me/+201274285568"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faWhatsapp} />
                </a>
              </div>
            </div>
          </div>

          <div className="c-right" data-aos="fade-left">
            <form ref={formRef} onSubmit={sendEmail}>
              <label>Name</label>
              <input type="text" name="user_name" placeholder="Your Name" />
              <label>Email</label>
              <input type="email" name="user_email" placeholder="Your Email" />
              <label>Message</label>
              <textarea
                name="message"
                rows="6"
                placeholder="I'd Love To Hear About Your Project"
              ></textarea>

              <input type="hidden" name="time" />
              <button type="submit" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
                <FontAwesomeIcon icon={faPaperPlane} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
