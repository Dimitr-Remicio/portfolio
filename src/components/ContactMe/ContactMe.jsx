import s from "./Contact.module.scss";

const ContactMe = () => {
  return (
    <div className={s.contact} id="contact">
      <div className={s.cont}>
        <div className={s.mediacont}>
          <h3>Contact Me</h3>
          <p>
            Si estas interesado, no dudes en contactarme puedes hacerlo
            completando este formulario...
          </p>
          <h4>Email</h4>
            <p>dimitr.darm27@gmail.com</p>
          <h4>Phone</h4>
            <p>+57 3052288043</p>

        </div>
        <div className={s.right}>
          <form className="form" action="" method="get">
            <div className={s.div}>
              <div className="input">
                <input
                  id="name"
                  type="text"
                  className="input__element"
                  placeholder=" "
                />
                <label className="input__label" htmlFor="name">
                  First name
                </label>
              </div>
              <div className="input">
                <input
                  id="name"
                  type="text"
                  className="input__element"
                  placeholder=" "
                />
                <label className="input__label" htmlFor="name">
                  Last Name
                </label>
              </div>
            </div>
            <div className="input">
              <input
                id="email"
                type="email"
                className="input__element"
                placeholder=" "
              />
              <label className="input__label" htmlFor="email">
                Email
              </label>
            </div>
            <div className="input">
              <textarea
                id="textfield"
                type="text"
                className="input__element  textfield"
                placeholder=" "
              >
            </textarea>
              <label className="input__label" htmlFor="textfield">
                Write a Message
              </label>
            </div>
            <button className={s.button} type="submit" name="submit">
              {" "}
              enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ContactMe;
