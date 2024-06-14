import css from "./Contact.module.css";
import {FaUser} from "react-icons/fa";
import {BsFillTelephoneFill} from "react-icons/bs";

export const Contact = ({values}) => {
  const {name, number} = values;
  return (
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
  );
};
export default Contact;
