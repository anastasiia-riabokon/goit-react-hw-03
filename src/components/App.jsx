import {useState} from "react";
// import "./App.css";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import ContactForm from "./ContactForm/ContactForm";
import initialContacts from "../data/contacts.json";
import {useLocalStorage} from "./hook/useLocalStorage";

function App() {
  const [contacts, setContacts] = useLocalStorage(
    "contact",
    initialContacts
  );

  const [searchContact, setSearchContacts] = useState("");

  const filteredContacts = contacts.filter((contact) =>
    contact.name
      .toLowerCase()
      .includes(searchContact.toLowerCase())
  );

  const handleAddContact = (newContact) =>
    setContacts((prev) => [...prev, newContact]);

  const handleDeleteContact = (id) => {
    setContacts((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={handleAddContact} />
      <SearchBox
        searchValue={searchContact}
        onSearchValue={setSearchContacts}
      />
      <ContactList
        users={filteredContacts}
        deleteContact={handleDeleteContact}
      />
    </div>
  );
}

export default App;
