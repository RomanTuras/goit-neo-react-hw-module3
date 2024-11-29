import { useState, useEffect } from "react";
import Container from "./components/Container/Container.jsx";
import ContactList from "./components/ContactList/ContactList.jsx";
import SearchBox from "./components/SearchBox/SearchBox.jsx";
import ContactForm from "./components/ContactForm/ContactForm.jsx";
import contacts_db from "./contacts_db.json";

function App() {
  const [contacts, setContacts] = useState(() => {
    const contacts = window.localStorage.getItem("contacts");
    if (contacts !== null) {
      return JSON.parse(contacts);
    }
    return contacts_db;
  });

  const [filteredContacts, setFilteredContacts] = useState(() => {
    return [...contacts];
  });

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleSearch = (query) => {
    setFilteredContacts(() => {
      return contacts.filter((contact) => {
        const name = contact.name.toLowerCase();
        return name.includes(query.toLowerCase());
      });
    });
  };

  const deleteContactById = (id) => {
    return contacts.filter((contact) => {
      return contact.id !== id;
    });
  }

  const addContact = (contact) => {
    setContacts(() => {
      return [...contacts, contact];
    });

    setFilteredContacts(() => {
      return [...contacts, contact];
    });
  };

  const deleteContact = (id) => {
    setContacts(() => {
      deleteContactById(id)
    });

    setFilteredContacts(() => {
      deleteContactById(id)
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
