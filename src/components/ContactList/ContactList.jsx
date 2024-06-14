import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export const ContactList = ({users, deleteContact}) => {
  return (
    <ul className={css.list}>
      {users.map((user) => (
        <li className={css.item} key={user.id}>
          <Contact values={user} />
          <button
            className={css.btn}
            onClick={() => deleteContact(user.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
export default ContactList;
