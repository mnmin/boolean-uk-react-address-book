import { useEffect, useState } from "react"
import { Link, Route, Routes } from "react-router-dom"
import ContactsList from "./components/ContactsList"
import ContactsAdd from "./components/ContactsAdd"
import ContactsView from "./components/ContactsView"
import "./styles/styles.css"

export default function App() {
  const [contacts, setContacts] = useState([])
  
  //TODO: Load all contacts on useEffect when component first renders

  const fetchContactsFromDB = (contacts) => {
    //fetches all contacts via get request
    fetch(`http://localhost:4000/contacts`)
      .then((res) => res.json())
      .then((data) => { 
        console.log("data", data, contacts)
        setContacts(data)
      });
  }

  useEffect(() => {
    fetchContactsFromDB()
  }, []); 

  return (
    <>
      <nav>
        <h2>Menu</h2>
        <ul>
          {/* TODO: Make these links */}
          <li>
            <Link to="/contactsList">Contacts List</Link>
          </li>
          <li>
            <Link to="/addNewContact">Add New Contact</Link> 
          </li>
        </ul>
      </nav>
      <main>
        <Routes>
          <Route
          path="/addNewContact"
          element={<ContactsAdd setContacts={setContacts} contacts={contacts} />} />
          <Route
          path="/contactsList"
          element={<ContactsList contacts={contacts}  />} />
          <Route
            path="/contacts/:id"
            element={<ContactsView contacts={contacts}/>} />
        </Routes>
      </main>
    </>
  )
}
