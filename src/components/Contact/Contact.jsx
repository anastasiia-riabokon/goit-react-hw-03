import css from "./Contact.module.css";
import {FaUser} from "react-icons/fa";
import {BsFillTelephoneFill} from "react-icons/bs";

export const Contact = ({values}) => {
  const {name, number} = values;
  return (
    <>
      <div>
        <FaUser />
        <p>{name}</p>
      </div>

      <div>
        <BsFillTelephoneFill />
        <p>{number}</p>
      </div>
    </>
  );
};
export default Contact;
