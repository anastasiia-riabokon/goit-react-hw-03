import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export const ContactList = ({users, deleteContact}) => {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <Contact values={user} />
          <button onClick={() => deleteContact(user.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
export default ContactList;
