"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
import emailjs from "@emailjs/browser";
import { useInView } from "react-intersection-observer";

// http://localhost:3000/ru/authorization/

const LandingHeader = ({ setActivePage }: any) => {
  const pathname = usePathname();
  const locale = pathname;
  const locale1 = pathname.split("/")[1];
  const isKazakh = pathname === "/";
  const isEnglish = pathname === "/en";
  const isRussian = pathname === "/ru";
  const isKazakh1 = pathname === "/kz";
  const form = useRef<HTMLFormElement>(null);
  const [messageSent, setMessageSent] = useState(false);
  const [contactRef, inView] = useInView({
    threshold: 0.5,
  });

  const inViewValue = inView;

  useEffect(() => {
    if (inViewValue) {
      setActivePage("Contact");
    }
  }, [inViewValue]);

  const sendEmail = (e: any) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_wobxutq",
        "template_ifxt8tp",
        form.current || "",
        "eiq-JASidCV3D9jxF"
      )
      .then(
        (result) => {
          console.log(result.text);
          if (form.current) {
            form.current.reset();
          }
          setMessageSent(true);
          setTimeout(() => setMessageSent(false), 5000); // Скрыть сообщение через 5 секунд
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div
        id="contact"
        ref={contactRef}
        className={`footer-background ${
          isRussian ? "footer-background-ru" : ""
        } ${isKazakh ? "footer-background-kz" : ""} ${
          isEnglish ? "footer-background-en" : ""
        }`}
      >
        <div className="footer-container">
          <h1 className="footer-title">
            Sign up for updates and exclusive launch offers!
          </h1>

          {/* <p className="footer-p">
            Subscribe for notifications and receive special offers!
          </p> */}
          <div className="form__container">
            <form ref={form} onSubmit={sendEmail}>
              <div className="form__group">
                <label htmlFor="name" className="form__label">
                  Name
                </label>
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  placeholder="Brian Clark"
                  className="form__input"
                  required
                />
              </div>
              <div className="form__group">
                <label htmlFor="email" className="form__label">
                  Email
                </label>
                <input
                  type="email"
                  id="user_email"
                  name="user_email"
                  placeholder="example@youremail.com"
                  className="form__input"
                  required
                />
              </div>
              <div className="form__afterButton">
                <button type="submit" className="form__button">
                  Send →
                </button>
                {messageSent && (
                  <div className="form__message">
                    Message Sent Successfully!
                  </div>
                )}
              </div>
            </form>
          </div>
          <h2 className="footer-h2">Want to reach out directly?</h2>

          <p className="footer-p1">
            Connect with Us Personally for Direct Communication
          </p>
          <div className="contact-card">
            <div className="contact-info">
              <div className="contact-info__email">
                <Image
                  className="contact-info__icon contact-info__icon--email"
                  src={"/static/icons/email.svg"}
                  alt={"email"}
                  width={50}
                  height={50}
                />
                <div className="contact-info__data">
                  <h2 className="contact-info__h2">Email</h2>
                  <a
                    href="mailto:example@email.com"
                    className="contact-info__p2"
                  >
                    sales@beyim.ai
                  </a>
                </div>
              </div>
              <div className="contact-info__website">
                <Image
                  className="contact-info__icon contact-info__icon--website"
                  src={"/static/icons/website.svg"}
                  alt={"website"}
                  width={50}
                  height={50}
                />
                <div className="contact-info__data">
                  <h2 className="contact-info__h2">Website</h2>
                  <a
                    href="https://beyim.ai/"
                    className="contact-info__p2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    beyim.ai
                  </a>
                </div>
              </div>
              <div className="contact-card__qr">
                <Image
                  src={"/static/icons/qr.svg"}
                  alt="QR code placeholder image with a grid pattern"
                  className="contact-card__image"
                  width={85}
                  height={85}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingHeader;
