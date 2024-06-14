import css from "./Contact.module.css";
import {FaUser} from "react-icons/fa";
import {BsFillTelephoneFill} from "react-icons/bs";

export const Contact = ({values, deleteContact}) => {
  const {id, name, number} = values;
  return (
    <>
      <div>
        <div className={css.block}>
          <FaUser />
          <p>{name}</p>
        </div>

        <div className={css.block}>
          <BsFillTelephoneFill />
          <p>{number}</p>
        </div>
      </div>
      <button
        className={css.btn}
        onClick={() => deleteContact(id)}
      >
        Delete
      </button>
    </>
  );
};
export default Contact;
