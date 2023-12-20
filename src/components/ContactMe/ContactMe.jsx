import { Formik } from "formik";
import s from "./Contact.module.scss";
// import Email from "./email";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import { useState } from "react";
import Notiflix from "notiflix";
import { motion } from "framer-motion";

function ContactMe() {
  let [data, setData] = useState();

  Notiflix.Notify.init({
    width: "280px",
    position: "right-top",
    distance: "35px",

    opacity: 1,
    borderRadius: "21px",
    rtl: false,
    timeout: 3000,
    messageMaxLength: 110,
    backOverlay: false,
    backOverlayColor: "rgba(0,0,0,0.5)",
    plainText: true,
    showOnlyTheLastOne: false,
    clickToClose: true,
    pauseOnHover: true,
    ID: "NotiflixNotify",
    className: "notiflix-notify",
    zindex: 4001,
    fontFamily: "Quicksand",
    fontSize: "15px",
    cssAnimation: true,
    cssAnimationDuration: 400,
    cssAnimationStyle: "fade",
    closeButton: false,
    useIcon: true,
    useFontAwesome: false,
    fontAwesomeIconStyle: "basic",
    fontAwesomeIconSize: "34px",
    success: {
      background: "var(--accent-color)",

      textColor: "var(--text-color-c)",
      childClassName: "notiflix-notify-success",
      notiflixIconColor: "var(--text-color-c)",
      fontAwesomeClassName: "fas fa-check-circle",
      fontAwesomeIconColor: "rgba(0,0,0,0.2)",
      backOverlayColor: "rgba(50,198,130,0.2)",
    },
    failure: {
      background: "#ff5549",
      textColor: "var(--text-color-c)",
      childClassName: "notiflix-notify-failure",
      notiflixIconColor: "var(--text-color-c)",
      fontAwesomeClassName: "fas fa-times-circle",
      fontAwesomeIconColor: "rgba(0,0,0,0.2)",
      backOverlayColor: "rgba(255,85,73,0.2)",
    },
    warning: {
      background: "#eebf31",
      textColor: "var(--text-color-c)",
      childClassName: "notiflix-notify-warning",
      notiflixIconColor: "var(--text-color-c)",
      fontAwesomeClassName: "fas fa-exclamation-circle",
      fontAwesomeIconColor: "rgba(0,0,0,0.2)",
      backOverlayColor: "rgba(238,191,49,0.2)",
    },
    info: {
      background: "#26c0d3",
      textColor: "var(--text-color-c)",
      childClassName: "notiflix-notify-info",
      notiflixIconColor: "var(--text-color-c)",
      fontAwesomeClassName: "fas fa-info-circle",
      fontAwesomeIconColor: "rgba(0,0,0,0.2)",
      backOverlayColor: "rgba(38,192,211,0.2)",
    },
  });

  function userinfo(values) {
    setData(values);
  }

  const form = useRef();

  function sendEmail() {
    // e.preventDefault();

    emailjs
      .sendForm(
        "service_l0v5mwu",
        "template_djz7sid",
        form.current,
        "bmg43oUjXOFl80CX6"
      )
      .then(
        (result) => {
          console.log(result.text);
          Notiflix.Notify.success("¡Correo Enviado!😁");
        },
        (error) => {
          Notiflix.Notify.failure("Lo siento Ha ocurrido un error... 😔");
          console.log(error.text);
        }
      );
  }

  console.log(data);

  return (
    <div className={s.contact} id="contact">
      {/* <Email data={data} /> */}
      <div className={s.cont}>
        <motion.div
          className={s.mediacont}
          initial={{ opacity: 0, y: -500 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          animate={{ y: 0 }}
        >
          <h3>Contact Me</h3>
          <p>
            Si estas interesado, no dudes en contactarme puedes hacerlo
            completando este formulario...
          </p>
          <h4>Email</h4>
          <p>dimitr.darm27@gmail.com</p>
        </motion.div>
        <motion.div
          className={s.mediacont}
          initial={{ opacity: 0, y: -500 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          animate={{ y: 0 }}
        >
          <div className={s.wrp_Form}>
            <Formik
              initialValues={{
                user_name: "",
                user_email: "",
                message: "",
              }}
              onSubmit={(values, { resetForm }) => {
                sendEmail();
                userinfo(values);
                setTimeout(() => {
                  resetForm();
                }, 300);
                // sendEmail();
              }}
            >
              {({ values, handleChange, handleBlur, handleSubmit }) => (
                <form className="form" ref={form} onSubmit={handleSubmit}>
                  <div className="input">
                    <input
                      id="name"
                      name="user_name"
                      type="text"
                      className="input__element"
                      placeholder=" "
                      onBlur={handleBlur}
                      value={values.user_name}
                      onChange={handleChange}
                    />
                    <label className="input__label" htmlFor="name">
                      Name
                    </label>
                  </div>
                  <div className="input">
                    <input
                      id="email"
                      name="user_email"
                      type="email"
                      className="input__element"
                      value={values.user_email}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder=" "
                    />
                    <label className="input__label" htmlFor="email">
                      Email
                    </label>
                  </div>
                  <div className="input">
                    <textarea
                      id="textfield"
                      name="message"
                      type="text"
                      value={values.message}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      className="input__element  textfield"
                      placeholder=" "
                    ></textarea>
                    <label className="input__label" htmlFor="textfield">
                      Write a Message
                    </label>
                  </div>
                  <button className={s.button} type="submit" name="submit">
                    {" "}
                    enviar
                  </button>
                </form>
              )}
            </Formik>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
export default ContactMe;
