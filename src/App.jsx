import { useState, useEffect } from "react";
import Container from "./components/Container/Container.jsx";
import ContactList from "./components/ContactList/ContactList.jsx";
import SearchBox from "./components/SearchBox/SearchBox.jsx";
import ContactForm from "./components/ContactForm/ContactForm.jsx";
import contacts_db from "./contacts_db.json";

function App() {
  const [filter, setFilter] = useState("");

  const [contacts, setContacts] = useState(() => {
    const contacts = window.localStorage.getItem("contacts");
    if (contacts !== null) {
      return JSON.parse(contacts);
    }
    return contacts_db;
  });

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  let filteredContacts = contacts.filter((contact) => {
    const name = contact.name.toLowerCase();
    return name.includes(filter.toLowerCase());
  });

  const handleSearch = (searchQuery) => {
    setFilter(searchQuery);
  };

  const addContact = (contact) => {
    setContacts(() => {
      return [...contacts, contact];
    });
  };

  const deleteContact = (id) => {
    setContacts(() => {
      return contacts.filter((contact) => {
        return contact.id !== id;
      });
    });
  };

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm addContactHandle={addContact} />
      <SearchBox handleSearch={handleSearch} />
      <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
    </Container>
  );
}

export default App;
