import { useEffect, useState } from "react"
import { Link, Route, Routes } from "react-router-dom"
import ContactsList from "./components/ContactsList"
import ContactsAdd from "./components/ContactsAdd"
import ContactsView from "./components/ContactsView"
import "./styles/styles.css"

export default function App() {
  const [contacts, setContacts] = useState([])
  
  //TODO: Load all contacts on useEffect when component first renders

  useEffect(() => {

    console.log("fetching data")
  })

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
          element={<ContactsAdd />} />
          <Route
          path="/contactsList"
          element={<ContactsView />} />
        </Routes>
      </main>
    </>
  )
}
